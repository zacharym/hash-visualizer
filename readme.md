# Hash Table Performance Visualizer
------------------------------------

This is a naive hash table implementation for storing strings with JavaScript. It's essentially the default express app, with the
hash function and table all living on the client.

Upload text to be hashed, pick your hash table size and prime factor, and then see a histogram of where the values end up hashing to.

It only hashes each word once so peaks on the histogram actually represent collisions between unique entries.

I recommend allocating ~1019 (or some prime around there) spots in your table and using a very long text like this <a href="https://archive.org/stream/firstfortyninest030256mbp/firstfortyninest030256mbp_djvu.txt">Hemingway</a>

Here is a <a href="http://htv.zachmarkin.com">live demo</a>.

Try using both prime and non-prime factors to see how performance varies.

Copyright © 2014

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE":
 * <zachmarkin@gmail.com> wrote this project. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return, Zachary Markin
 * ----------------------------------------------------------------------------
 */
