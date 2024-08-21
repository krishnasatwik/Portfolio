import React from "react";

const Footer = () => {
  return (
    <main className="bg-black p-4">
      <footer class="bg-black rounded-lg shadow m-4 ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" class="hover:underline">
              Pilla Krishna Satwik™
            </a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Instagram: @krishnasatwik
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Gmail: krishnasatwik03@Gmail.com
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Contact: +91 9490433172
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
