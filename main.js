function redirectToFiction()
{
    window.location = "fiction.html";
};

function redirectToNonfiction()
{
    window.location = "non-fiction.html";
};

function redirectTotbr()
{
    window.location = "tbr.html";
};

function repeat_NF() {
    var orig_nf = document.getElementById('orig_nf');
    if (!orig_nf) {
        console.error('Original element not found');
        return;
    }
    var clone = orig_nf.cloneNode(true);
    var repeat_NonFiction = document.getElementById('repeat_NonFiction');
    if (!repeat_NonFiction) {
        console.error('Target container not found');
        return;
    }
    repeat_NonFiction.appendChild(clone);
    console.log("Function loaded");
};

document.addEventListener('DOMContentLoaded', function() {});

function sendTBR()
{
    var data = document.getElementById('tbr_input').value;
    localStorage.setItem('myData', 'data');
    var storedData = localStorage.getItem('myData');
    if (storedData) {
        document.getElementById('display_tbr').textContent = storedData;
    } else {
        document.getElementById('display_tbr').textContent = 'No data found';
    }
};

