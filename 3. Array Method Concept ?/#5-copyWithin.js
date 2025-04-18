let arr = [10, 20, 30, 50, 80, 100];
let total = arr.copyWithin(3, 0, 2);
console.log(total);

// উদাহরণ ১: সাধারণ copyWithin() ব্যবহার
// js
// Copy
// Edit
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0); 
// console.log(fruits);
// আউটপুট:
// js
// Copy
// Edit
// ["Banana", "Orange", "Banana", "Orange"]
// 🔹 এখানে fruits.copyWithin(2, 0) অর্থ:

// 0 থেকে কপি করা শুরু হবে।
// 2 নম্বর ইনডেক্স থেকে নতুনভাবে বসানো হবে।
// Apple ও Mango মুছে গিয়ে "Banana", "Orange" বসেছে।
// উদাহরণ ২: start ও end ব্যবহার করে
// js
// Copy
// Edit
// let numbers = [1, 2, 3, 4, 5];
// numbers.copyWithin(1, 3, 5);
// console.log(numbers);
// আউটপুট:
// js
// Copy
// Edit
// [1, 4, 5, 4, 5]
// 🔹 ব্যাখ্যা:

// copyWithin(1, 3, 5);
// 3 ইনডেক্স থেকে শুরু করে 5 এর আগ পর্যন্ত (4, 5) কপি করবে।
// এগুলো 1 নম্বর ইনডেক্স থেকে বসানো হবে।
// তাই numbers আপডেট হয়ে হয়েছে: [1, 4, 5, 4, 5]।
// উদাহরণ ৩: নেগেটিভ ইনডেক্স ব্যবহার
// js
// Copy
// Edit
// let letters = ["A", "B", "C", "D", "E"];
// letters.copyWithin(-2, 0, 2);
// console.log(letters);
// আউটপুট:
// js
// Copy
// Edit
// ["A", "B", "C", "A", "B"]
// 🔹 ব্যাখ্যা:

// -2 মানে শেষ থেকে দ্বিতীয় ইনডেক্স (যেখানে বসবে)।
// 0 থেকে 2 পর্যন্ত (A, B) কপি করবে।
// ফলে শেষের D, E মুছে গিয়ে "A", "B" বসেছে।
// 🔥 গুরুত্বপূর্ণ বিষয়:
// এটি অ্যারের দৈর্ঘ্য পরিবর্তন করে না।
// এটি মূল অ্যারে পরিবর্তন করে (mutate করে)।
// end ইনডেক্স বাদ পড়ে (শুধু start থেকে end-1 পর্যন্ত কাজ করে)।
// নেগেটিভ ইনডেক্স ব্যবহার করা যায়।
// ✅ সেরা বিকল্প: যখন একই অ্যারের মধ্যে কিছু উপাদান কপি করতে হয়, তখন copyWithin() উপকারী।
// ⛔ কিন্তু এটি নতুন অ্যারে রিটার্ন করে না, তাই সাবধানে ব্যবহার করা উচিত।