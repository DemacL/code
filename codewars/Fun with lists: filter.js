function filter(head, p) {
    //console.log(head,p);
    const allItems = [];
    let currentItem = head;
    while (currentItem) {
        allItems.push(currentItem.data);
        currentItem = currentItem.next;
    }
    console.log(allItems);
    const filterItems = allItems.filter(item => { console.log(item, p(item)); return p(item) });
    console.log(filterItems);


    return filterItems;
}