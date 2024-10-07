class ArticleNotFoundException(Exception):
    """Exception raised when an Article is not found."""
    pass

class InvalidArticleException(Exception):
    """Exception raised for invalid Article operations."""
    pass

class ImportExcelArticleException(Exception):
    """Exception raised when create a article by excel."""
    def __init__(self, message="Error processing import"):
        self.message = message
        super().__init__(self.message)
    pass
