// heart number increase secition

const allThinHeartLogo = document.getElementsByClassName("thin-heart-logo");
for (let i = 0; i < allThinHeartLogo.length; i++) {
  allThinHeartLogo[i].addEventListener("click", function () {
    let loveNumber = parseInt(document.getElementById("love-number").innerText);
    let newLoveNumber = loveNumber + 1;
    document.getElementById("love-number").innerText = newLoveNumber;
  });
}

// copy number increase section
const allCopyCountBtn = document.getElementsByClassName("copy-count-btn");
for (let i = 0; i < allCopyCountBtn.length; i++) {
  allCopyCountBtn[i].addEventListener("click", function () {
    let copyNumber = parseInt(document.getElementById("copy-number").innerText);
    let newCopyNumber = copyNumber + 1;
    const allBtnText = document.getElementsByClassName("copy-btn-text");
    const btnText = allBtnText[i].innerText;

    navigator.clipboard.writeText(btnText);

    document.getElementById("copy-number").innerText = newCopyNumber;

    alert("copied");
  });
}
const totalData = [];
const allCallBtn = document.getElementsByClassName("call-count-btn");

for (let i = 0; i < allCallBtn.length; i++) {
  allCallBtn[i].addEventListener("click", function () {
    let coinNumber = parseInt(document.getElementById("coin-number").innerText);

    const alertMsgNumber = document.getElementsByClassName("copy-btn-text");
    const singleAlertMsg = alertMsgNumber[i].innerText;

    const allh3 = document.getElementsByTagName("h3");
    const singleH3 = allh3[i].innerText;

    if (coinNumber > 20) {
      let newCoinNumber = coinNumber - 20;
      document.getElementById("coin-number").innerText = newCoinNumber;
      const data = {
        name: singleH3,
        number: singleAlertMsg,
        date: new Date().toLocaleTimeString(),
      };

      alert(`calling to :${singleAlertMsg} 
${singleH3}`);
      const div = document.createElement("div");
      div.innerHTML = `<div
            class="w-full bg-[#FAFAFA] p-3 rounded-lg mt-2 flex justify-between items-center"
          >
            <div>
              <h4 class="text-lg font-bold">${data.name}</h4>
              <p>${data.number}</p>
            </div>
            <p>${data.date}</p>
          </div>`;
      const container = document.getElementById("history-section");
      container.prepend(div);
    } else {
      alert("Please You May Recharge");
    }
  });
}
