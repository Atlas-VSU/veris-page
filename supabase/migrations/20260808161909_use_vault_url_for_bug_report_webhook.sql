create or replace function public.notify_bug_report_webhook()
returns trigger
language plpgsql
security definer
set search_path = public, vault, extensions
as $$
declare
  service_key text;
  webhook_url text;
begin
  select decrypted_secret into service_key
  from vault.decrypted_secrets
  where name = 'service_role_key'
  limit 1;

  select decrypted_secret into webhook_url
  from vault.decrypted_secrets
  where name = 'bug_report_webhook_url'
  limit 1;

  perform net.http_post(
    url := webhook_url,
    body := jsonb_build_object('record', to_jsonb(new)),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_key
    )
  );

  return new;
end;
$$;