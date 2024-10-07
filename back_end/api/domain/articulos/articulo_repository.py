from abc import abstractmethod

from api.domain.repositories import RepositoryInterface


class AriticuloRepositoryInterface(RepositoryInterface):
    @abstractmethod
    def filter_by_ids(self, filter_data):
        "Filter articles by list ids"
        pass
    @abstractmethod
    def import_excel_data_in_db(self, row):
        "Create data in db from excel"
        pass