<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array and Array Methods</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            line-height: 1.6;
        }
        h1 {
            text-align: center;
            color: #4CAF50;
        }
        p {
            max-width: 800px;
            margin: 20px auto;
            font-size: 18px;
        }
        table {
            width: 80%;
            margin: 30px auto;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 12px;
            text-align: center;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        .note {
            background-color: #fff8e1;
            border-left: 5px solid #ffeb3b;
            padding: 20px;
            margin: 20px;
        }
        code {
            background-color: #f0f0f0;
            padding: 5px;
            border-radius: 4px;
        }
        .nepali-text {
            font-family: "Noto Sans Devanagari", sans-serif;
            color: #ff5722;
        }
    </style>
</head>
<body>
    <h1>Understanding Arrays in JavaScript</h1>
    
    <p>
        Arrays are variables that can hold more than one value. Think of an array as a school bag, which can contain many books (values) like science, math, etc.
    </p>

    <div class="note">
        <h2>Important Notes:</h2>
        <p>Arrays are objects in JavaScript, and the type of operator on arrays always returns "object".</p>
        <p>Arrays can hold any values in a single row.</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Example</th>
                <th>Output</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>toString()</td>
                <td><code>const n = [1, 2, 3];</code><br><code>console.log(String(n));</code></td>
                <td><code>1,2,3</code></td>
            </tr>
            <tr>
                <td>join()</td>
                <td><code>const n = [1, 2, 3];</code><br><code>console.log(n.join());</code></td>
                <td><code>1,2,3</code></td>
            </tr>
            <tr>
                <td>pop()</td>
                <td><code>let c = [1, 2, 3];</code><br><code>c.pop(); console.log(c);</code></td>
                <td><code>[1, 2]</code></td>
            </tr>
            <tr>
                <td>push()</td>
                <td><code>let fruits = ["apple", "banana"];</code><br><code>fruits.push("orange");</code></td>
                <td><code>["apple", "banana", "orange"]</code></td>
            </tr>
            <tr>
                <td>delete</td>
                <td><code>let arr = [1, 2, 3];</code><br><code>delete arr[1];</code></td>
                <td><code>[1, empty, 3]</code></td>
            </tr>
            <tr>
                <td>sort()</td>
                <td><code>let a = [7, 8, 5];</code><br><code>a.sort(); console.log(a);</code></td>
                <td><code>[5, 7, 8]</code></td>
            </tr>
            <tr>
                <td>splice()</td>
                <td><code>let arr = [5, 10, 15, 20, 25];</code><br><code>arr.splice(2, 2, 50, 60, 70);</code></td>
                <td><code>[5, 10, 50, 60, 70, 25]</code></td>
            </tr>
            <tr>
                <td>slice()</td>
                <td><code>let slice = [1, 3, 4, 5, 6, 7];</code><br><code>slice.splice(1, 3); console.log(slice);</code></td>
                <td><code>[1, 5, 6, 7]</code></td>
            </tr>
        </tbody>
    </table>

    <div class="note">
        <h2>Explanation of splice method:</h2>
        <p>The <code>splice()</code> method allows you to remove or add elements to an array.</p>
        <p>Example: If we want to delete the elements at index 1 and 2 and add new elements at that position:</p>
        <ul>
            <li>We specify the starting index (2).</li>
            <li>We specify how many elements to remove (2 in this case, removing 15 and 20).</li>
            <li>We add new elements (50, 60, 70) at the same position.</li>
        </ul>
        <p>Result: <code>[5, 10, 50, 60, 70, 25]</code></p>
        <h3 class="nepali-text">यहाँ:</h3>
        <ul class="nepali-text">
            <li>2 → यसको मतलब, splice() index 2 बाट काम सुरु गर्छ (यहाँ 15 र 20 छन्)।</li>
            <li>2 → यसको मतलब, splice() २ वटा तत्वहरू (15 र 20) हटाउँछ।</li>
            <li>50, 60, 70 → यी तीन वटा नयाँ तत्वहरू index 2 मा राखिन्छन्।</li>
        </ul>
        <p>नतिजा: <code>[5, 10, 50, 60, 70, 25]</code></p>
    </div>

    <script>
        let numbers = [1, 2, 3, 4];
        console.log(numbers);  // Output: [1, 2, 3, 4]
        console.log(numbers.length);  // Output: 4

        const n = [1, 2, 3];
        console.log(String(n));  // Output: "1,2,3"

        const b = [1, 2, 3];
        console.log(b.join());  // Output: "1,2,3"

        let c = [1, 2, 3];
        c.pop();
        console.log(c);  // Output: [1, 2]

        let push = [1, 2, 3];
        push.push(4);
        console.log(push);  // Output: [1, 2, 3, 4]

        let fruit = ["apple", "banana"];
        fruit.push("orange");
        console.log(fruit);  // Output: ["apple", "banana", "orange"]

        let arr = [1, 2, 3];
        delete arr[1];
        console.log(arr);  // Output: [1, empty, 3]

        let a = [7, 8, 5];
        a.sort();
        console.log(a);  // Output: [5, 7, 8]

        let slice = [1, 3, 4, 5, 6, 7];
        slice.splice(1, 3);  // Removes 3 elements starting from index 1
        console.log(slice);  // Output: [1, 5, 6, 7]

        let hello = [1, 4, 5, 6];
        hello.splice(1, 2, 2, 3);
        console.log(hello);  // Output: [1, 2, 3, 6]
    </script>
</body>
</html>
