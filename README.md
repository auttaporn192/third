# Nest CLI commands

- create module: yarn nest g module <MODULE_NAME>
- controller: yarn nest g controller <MODULE>
- service: yarn nest g service <MODULE>

# Relationship

## ont to one

- user.address = address
- user.addressId = 1

## one to many

- article.comments = [comment1, comment2]
- comment.articleId = 1

## many to many

- article.categories = [cat1, cat2]
- category.articles = [a1, a2]
