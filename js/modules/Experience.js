import { Tooltip } from "../module_additions/Tooltip.js";
export const Experience = (title, experiences) => {
  const titleMarkup = `
        <h2>${title}</h2>
    `;
  const experienceList = experiences
    .map(function(experience) {
      return `<aside class="experience flex row">
            <div class="dates item_1_5">
                ${experience.startDate} - ${experience.endDate}
            </div>
            <div class="position-details item_4_5">
                <div><span>${experience.company}</span>, ${experience.companyLocation} — ${experience.title}</div>
                <div class="job-description">${experience.description}</div>
            </div>
        </aside>`;
    })
    .join("");
  const markup =
    '<div class="flex col container experiences">' +
    titleMarkup +
    experienceList +
    `</div>`;
  //   const functionMarkup = Experience.toString();
  //   markup += functionMarkup;
  document.body.innerHTML += markup;
};
