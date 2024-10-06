from abc import ABC, abstractmethod


class RepositoryInterface(ABC):
    @abstractmethod
    def get_all(self):
        pass
    @abstractmethod
    def get_by_id(self, pk):
        pass
    @abstractmethod
    def create(self, data):
        pass
    @abstractmethod
    def update(self, instance, data):
        pass
    @abstractmethod
    def delete(self, instance):
        pass