from abc import ABC, abstractmethod


class RepositoryInterface(ABC):
    @abstractmethod
    def get_all(self):
        """
            Get all items from the table
            Return
                Data
        """
        pass
    @abstractmethod
    def get_by_id(self, pk):
        """
            Get item by id
            Arg:
                pk (int|str): identificator
            Return
                Data
        """
        pass
    @abstractmethod
    def create(self, data):
        """
            Create item
            Args:
                data (dict)
            Return
                Data
        """
        pass
    @abstractmethod
    def update(self, instance, data):
        pass
    @abstractmethod
    def delete(self, instance):
        pass