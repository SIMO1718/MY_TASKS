// script.js
function addTask() {
    const input = document.getElementById('taskInput');
    const ul = document.getElementById('taskList');

    if (input.value === '') {
        alert("كتب شي حاجة أولا أ صاحبي!");
        return;
    }

    // 1. إنشاء عنصر li جديد
    const li = document.createElement('li');
    li.innerHTML = input.value;

    // 2. فاش نكليكيو على المهمة، تولي "Checked"
    li.onclick = function() {
        this.classList.toggle('checked');
    };

    // 3. إضافة زر الحذف (X)
    const span = document.createElement('span');
    span.innerHTML = "\u00D7"; // علامة X
    span.onclick = function() {
        this.parentElement.remove(); // حذف المهمة
    };

    li.appendChild(span);
    ul.appendChild(li);

    // 4. خوي الـ input باش تكتب مهمة خرى
    input.value = '';
}
// هاد الكود كيتسجل الـ Service Worker بلا ما تمس الـ HTML
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("تطبيقك واجد يخدم بلا أنترنيت!"))
    .catch((err) => console.log("وقع مشكل في الـ SW: ", err));
}
