from abc import abstractmethod

from api.domain.repositories import RepositoryInterface


class AriticuloRepositoryInterface(RepositoryInterface):
    @abstractmethod
    def filter_by_ids(self, filter_data):
        pass