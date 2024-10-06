from api.data.articulos.repositories import ArticuloRepository

class ArticleUseCase:
    def __init__(self):
        self.repository = ArticuloRepository()

    def get_all_articles(self):
        return self.repository.get_all()

    def create_article(self, data):
        return self.repository.create(data)

    def update_article(self, pk, data):
        article = self.repository.get_by_id(pk)
        return self.repository.update(article, data)

    def delete_article(self, pk):
        article = self.repository.get_by_id(pk)
        self.repository.delete(article)
        
    def delete_articles(self, pks):
        pks_list = pks.split(',')
        filter_id_in = {
            "id__in" : pks_list
        }
        articles = self.repository.filter(filter_id_in)
        self.repository.delete(articles)
