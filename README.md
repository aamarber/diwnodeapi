# diwnodeapi

Example calls to the API

To get the TOKEN:
curl -d '{"email": "admin", "password":"admin"}' -H "Content-Type: application/json" -X POST http://localhost:9988/login

Authenticated calls:
curl -d '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWF0IjoxNjcxMTkyMDM2LCJleHAiOjE2NzExOTkyMzZ9.G1NMRjbB18gNhFgqkjMYi2UXvZCid6WXVorqjk0Kq_g"}' -H "Content-Type: application/json" -X POST http://localhost:9988/welcome

curl -d '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWF0IjoxNjcxMTk1MTYzLCJleHAiOjE2NzEyMDIzNjN9.KRisX_05n8gZ9evPmA0r2KgUcgZM-yLpqmGKk5DuHuk"}' -H "Content-Type: application/json" -X POST http://localhost:9988/products