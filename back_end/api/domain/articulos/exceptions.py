class ArticleNotFoundException(Exception):
    """Exception raised when an Article is not found."""
    pass

class InvalidArticleException(Exception):
    """Exception raised for invalid Article operations."""
    pass
