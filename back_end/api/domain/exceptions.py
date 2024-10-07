class ReadExcelException(Exception):
    """Exception raised when reads excel."""
    def __init__(self, message="Error read Excel"):
        super().__init__(self.message)
