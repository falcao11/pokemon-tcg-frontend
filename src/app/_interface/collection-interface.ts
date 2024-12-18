export interface CollectionInterface {
  collection_id: string;
  collection_name: string;
  set_id: string;
  onLoadingChange: (loading: boolean) => void;
}
