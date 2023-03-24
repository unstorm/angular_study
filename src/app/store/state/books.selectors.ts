import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../../sample/book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const sellectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
        return collection.map((id) => books.find((book) => book.id === id)!)
    }
)