curl --user USERNAME:PASSWORD \
'https://realtime.oxylabs.io/v1/queries' \
-H "Content-Type: application/json" \
-d '{"source": "universal_ecommerce", "url": "https://www.yelp.co.uk/search?find_desc=Burgers&find_loc=Frankfurt,%20Hessen,%20Germany"}'
