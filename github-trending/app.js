const langSelect = document.getElementById('languages-select');
const trendingReposList = document.getElementById('trending-repos-list');
const loader = document.getElementById('loader');

const BASE_URL = `https://trending-github-api.herokuapp.com/github`;

function showLoader() {
  loader.classList.remove('hidden');
  loader.classList.add('flex');
}

function hideLoader() {
  loader.classList.remove('flex');
  loader.classList.add('hidden');
}

async function bootstrap() {
  const res = await fetch(`${BASE_URL}/languages`);
  const languages = await res.json();
  renderLanguagesSelect(languages);
  langSelect.addEventListener('change', handleLanguageSelect);
}

function renderLanguagesSelect(languages) {
  langSelect.innerHTML = `
  <option value="-1">Select Language...</option>
  ${languages
    .map((lang) => {
      return `
      <option value="${lang}">${lang}</option>
    `;
    })
    .join('')}
`;
}

function renderTrendingRepos(repos) {
  if (!repos.length) {
    trendingReposList.innerHTML = '<div class="text-center font-bold text-white text-2xl">No Repos Found.</div>';
    return;
  }

  const reposHTML = repos
    .map((repo) => {
      return `
      <div class="repo-card p-4 border border-gray-200 bg-blue-100 break-words shadow-md">
        <h3 class="font-bold text-xl mb-2">${repo.name}</h3>
        <p>Author: ${repo.author}</p>
        <p>Stars: ${repo.stars}</p>
        <p>Forks: ${repo.forks}</p>
        <p>Language: ${repo.language}</p>
        <p class="text-right"><a class="text-blue-800 no-underline hover:opacity-80 font-bold text-xl" href="${repo.url}">Visit &rightarrow;</a></p>
      </div>
    `;
    })
    .join('');
  trendingReposList.innerHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">${reposHTML}</div>`;
}

async function handleLanguageSelect(e) {
  const selectedLanguage = e.target.value;
  if (selectedLanguage === '-1') return;
  // get trending repos for that language
  showLoader();
  const res = await fetch(`${BASE_URL}/repositories?language=${selectedLanguage}&period=&spokenLanguage=`);
  const data = await res.json();
  hideLoader();
  renderTrendingRepos(data);
}

bootstrap();
