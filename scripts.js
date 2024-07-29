document.addEventListener('DOMContentLoaded', function () {
    // Handle modal display
    window.showModal = function (modalId) {
        const modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    }

    window.closeModal = function (modalId) {
        const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
        modal.hide();
    }

    // Handle form submissions
    document.getElementById('houseForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const houseType = document.getElementById('houseType').value;
        const houseLocation = document.getElementById('houseLocation').value;
        const houseRent = document.getElementById('houseRent').value;
        addHouse(houseType, houseLocation, houseRent);
        closeModal('houseModal');
    });

    document.getElementById('tenantForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const tenantName = document.getElementById('tenantName').value;
        const tenantContact = document.getElementById('tenantContact').value;
        addTenant(tenantName, tenantContact);
        closeModal('tenantModal');
    });

    document.getElementById('paymentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const paymentTenant = document.getElementById('paymentTenant').value;
        const paymentAmount = document.getElementById('paymentAmount').value;
        addPayment(paymentTenant, paymentAmount);
        closeModal('paymentModal');
    });

    document.getElementById('userForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const userName = document.getElementById('userName').value;
        const userRole = document.getElementById('userRole').value;
        addUser(userName, userRole);
        closeModal('userModal');
    });

    // Placeholder functions for adding data
    function addHouse(type, location, rent) {
        const houseList = document.getElementById('housesList');
        const houseItem = document.createElement('div');
        houseItem.classList.add('card', 'mb-3');
        houseItem.innerHTML = `<div class="card-body">Type: ${type}, Location: ${location}, Rent: ${rent}</div>`;
        houseList.appendChild(houseItem);

        // Update dashboard stats
        document.getElementById('totalHouses').innerText = houseList.childElementCount;
    }

    function addTenant(name, contact) {
        const tenantList = document.getElementById('tenantsList');
        const tenantItem = document.createElement('div');
        tenantItem.classList.add('card', 'mb-3');
        tenantItem.innerHTML = `<div class="card-body">Name: ${name}, Contact: ${contact}</div>`;
        tenantList.appendChild(tenantItem);

        // Update dashboard stats
        document.getElementById('totalTenants').innerText = tenantList.childElementCount;
    }

    function addPayment(tenant, amount) {
        const paymentList = document.getElementById('paymentsList');
        const paymentItem = document.createElement('div');
        paymentItem.classList.add('card', 'mb-3');
        paymentItem.innerHTML = `<div class="card-body">Tenant: ${tenant}, Amount: ${amount}</div>`;
        paymentList.appendChild(paymentItem);

        // Update dashboard stats
        document.getElementById('recentPayments').innerText = paymentList.childElementCount;
    }

    function addUser(name, role) {
        const userList = document.getElementById('usersList');
        const userItem = document.createElement('div');
        userItem.classList.add('card', 'mb-3');
        userItem.innerHTML = `<div class="card-body">Username: ${name}, Role: ${role}</div>`;
        userList.appendChild(userItem);
    }

    window.generateReport = function () {
        alert('Report generation is not implemented yet.');
    }
});
