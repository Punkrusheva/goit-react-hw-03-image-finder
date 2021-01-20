//import React, { Component } from 'react';

/**


export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchPhotos() {
        
     const url = `${apiUrl}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${myKey}`;
       
     return fetch(url)
         .then(response => response.json())
         .then((photos) => {
             this.incrementPage();
             return photos;
         })
        .catch(error => console.log(error))       
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
    this.searchQuery = newQuery;
  }
} */