(function() {
  var style = document.createElement('style');
  style.innerHTML = `
    .custom-modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
    }

    .custom-modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border-radius: 20px;
      width: 80%;
    }

    .custom-close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }

    .custom-close:hover,
    .custom-close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }

    .custom-modal-heading {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
      font-family: sans-serif;
    }

    .custom-modal-paragraph {
      font-size: 16px;
      color: #555;
      line-height: 1.5;
      font-family: sans-serif;
    }
  `;
  document.head.appendChild(style);

  var modal = document.createElement('div');
  modal.className = 'custom-modal';
  modal.id = 'customHostingModal';

  var modalContent = document.createElement('div');
  modalContent.className = 'custom-modal-content';

  var closeButton = document.createElement('span');
  closeButton.className = 'custom-close';
  closeButton.innerHTML = '&times;';

  var heading = document.createElement('h2');
  heading.textContent = 'SCREW LTD.';
  heading.className = 'custom-modal-heading';

  var paragraph = document.createElement('p');
  paragraph.textContent = `This page is running in preview mode on the company's public server. It is not suitable for commercial use and is suitable for local display only.`;
  paragraph.className = 'custom-modal-paragraph';

  modalContent.appendChild(closeButton);
  modalContent.appendChild(heading);
  modalContent.appendChild(paragraph);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  closeButton.onclick = closeModal;
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  window.addEventListener('load', openModal);
})();
