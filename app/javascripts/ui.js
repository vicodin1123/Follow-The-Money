var UIBlocks = require('./uiBlocks');

var resetBeggarTable = function (count) {
    // Initialize content with table
    var content = document.getElementById("content");
    content.innerHTML = UIBlocks.beggarTable;

    var table = document.getElementById("beggarTable");
    // Remove table
    table.innerHTML = "";

    // Construct table
    for (var r = 0 ; r < count; r++)
    {
      table.innerHTML += UIBlocks.beggarInfo;   
    }
};

var resetRequestModal = function (title, count) {
    var modal = document.getElementsByClassName("list-modal-content")[0];
    var content = modal.getElementsByClassName("formContent")[0];

    modal.getElementsByClassName("formTitle")[0].innerHTML = title;

    // Remove list
    content.innerHTML = "";

    // Construct list
    for (var r = 0 ; r < count; r++) {
        content.innerHTML += UIBlocks.requestInfo.block;  
    }
};

var showAddRequestModal = function () {       
    var modal = document.getElementById('requestModal');
    modal.getElementsByClassName("amount")[0].value = "";
    modal.getElementsByClassName("reason")[0].value = "";
    modal.getElementsByClassName("status")[0].innerHTML = "";
    modal.style.display = "block";
};

var showAddBeggarModal = function () {       
    var modal = document.getElementById('beggarModal');
    console.log(modal);
    modal.getElementsByClassName("address")[0].value = "";
    modal.getElementsByClassName("name")[0].value = "";
    modal.style.display = "block";
};

var showRequestListModal = function () {       
    var modal = document.getElementById('listModal');
    modal.style.display = "block";
};

var toggleBatchApproveButton = function (status) {
    var container = document.getElementById('batchButton');
    if (status)
        container.style.display = "block";
    else
        container.style.display = "none";
}

var toggleLoadingModal = function (status) {
    var loadingModal = document.getElementById('loadingModal');
    if (status){        
        loadingModal.style.display = "block";
    }
    else{
        loadingModal.style.display = "none";    
    }
}

module.exports = {  
    showAddBeggarModal: showAddBeggarModal,
    resetBeggarTable: resetBeggarTable,
    showAddRequestModal: showAddRequestModal,
    showRequestListModal: showRequestListModal,
    resetRequestModal: resetRequestModal,
    toggleBatchApproveButton: toggleBatchApproveButton,
    toggleLoadingModal: toggleLoadingModal
};