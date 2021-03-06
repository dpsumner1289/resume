export const Skillset = skills => {
  const skillList = skills
    .map(function (skill) {
      return `<aside class="skillset flex col item_1_3">
          <h2>${skill.title}</h2>
          <ul>${skill.skillList
            .map(function (skil) {
              return `<li>${skil}</li>`
            })
            .join('')}</ul>
        </aside>`
    })
    .join('')
  const markup =
    `<section class="flex row container">` + skillList + `</section>`
  document.body.innerHTML += markup
}
