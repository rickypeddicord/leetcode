import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

var topKFrequent = function(nums, k) {
    const map = new Map();
    const maxHeap = new MaxPriorityQueue();
    const result = [];

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    for (const [key, value] of map) {
        maxHeap.enqueue(key, value);
    }

    for (let i = 0; i < k; i++) {
        result.push(map.dequeue().element);
    }

    return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
