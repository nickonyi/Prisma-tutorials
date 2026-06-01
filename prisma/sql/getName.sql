SELECT id, name, age
FROM "User"
WHERE age > $1 AND age < $2