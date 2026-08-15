
  create policy "Enable read access for all users"
  on "public"."faq"
  as permissive
  for select
  to public
using (true);



