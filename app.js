"use strict";

const STORAGE_KEY = "mmoma-program-editor-v1";

const EXPORT_CSS = `.mmoma-program {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: inherit;
  font-size: 17px;
  color: #111;
  line-height: 1.5;
  text-align: left;
  overflow-wrap: break-word;
}

.mmoma-program,
.mmoma-program * {
  box-sizing: border-box;
}

.mmoma-program__text {
  max-width: 65ch;
  margin: 0 auto;
}

.mmoma-program h1 {
  font-size: 42px;
  line-height: 1.15;
  margin: 0 0 32px;
  font-weight: 700;
}

.mmoma-program h2 {
  font-size: 32px;
  line-height: 1.2;
  margin: 48px 0 28px;
  font-weight: 700;
}

.mmoma-program h3 {
  font-size: 24px;
  line-height: 1.25;
  margin: 0 0 12px;
}

.mmoma-program p {
  margin: 0 0 18px;
  font-size: 17px;
}

.mmoma-program ul,
.mmoma-program ol {
  margin: 0 0 18px;
  padding-left: 24px;
}

.mmoma-program a {
  color: inherit;
  text-decoration: underline;
}

.mmoma-intro {
  margin-bottom: 36px;
}

.mmoma-exhibition__details p {
  margin-bottom: 6px;
}

.mmoma-exhibition__details p:last-child {
  margin-bottom: 0;
}

.mmoma-program__events {
  display: flow-root;
  padding-top: 48px;
}

.mmoma-program .mmoma-program__events > h2 {
  margin-top: 0;
}

.mmoma-event {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
  align-items: center;
  padding: 32px 0;
  border-top: 1px solid #ddd;
}

.mmoma-date {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.mmoma-date__item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mmoma-date__day {
  font-size: 21px;
  line-height: 1.25;
  font-weight: 400;
}

.mmoma-date__info,
.mmoma-date__range {
  font-size: 16px;
  line-height: 1.5;
}

.mmoma-content p {
  font-size: 16px;
  margin: 0;
}

.mmoma-content ul,
.mmoma-content ol {
  margin: 10px 0 0;
  font-size: 16px;
}

.mmoma-button,
.mmoma-button:link,
.mmoma-button:visited {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  max-width: 100%;
  min-height: 48px;
  padding: 0 22px;
  background: #111;
  color: #fff !important;
  border-radius: 30px;
  text-decoration: none !important;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
}

.mmoma-button:hover {
  background: #333;
}

.mmoma-button:focus-visible {
  outline: 2px solid #111;
  outline-offset: 4px;
}

.mmoma-program__events .mmoma-event {
  grid-template-columns: 180px minmax(0, 1fr) 150px;
  gap: 35px;
}

.mmoma-program__events .mmoma-button {
  width: 100%;
}

@media (max-width: 900px) {
  .mmoma-program__events .mmoma-event {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }

  .mmoma-program__events .mmoma-button {
    width: max-content;
  }
}

@media (max-width: 600px) {
  .mmoma-program h1 {
    font-size: 32px;
  }

  .mmoma-program h2 {
    font-size: 26px;
  }

  .mmoma-content h3 {
    font-size: 20px;
  }
}`;

const DEFAULT_DATA = {
  pageTitle: "Программа ноября",
  introText: "К 70-летию Лужников Московский музей современного искусства и Олимпийский комплекс подготовили совместную программу. Выставка, экскурсии, лекции и интерактивные встречи раскрывают связь спорта с искусством, архитектурой и жизнью города.",
  exhibitionTitle: "Выставка «Лужники. Есть место истории»",
  exhibitionText: "Как менялись Лужники и какое место спорт занимает в искусстве? Выставка в ММОМА объединяет работы художников от русского авангарда до наших дней, архивные фотографии, документы и предметы из фонда комплекса. Многие из этих материалов представлены публике впервые.\n\nВ залах можно увидеть реконструкцию раздевалки сборной России по футболу, познакомиться с историей крупных событий и фотопроектом Сергея Сапожникова об архитектуре сегодняшних Лужников. Интерактивные элементы и спортивные объекты становятся частью знакомства с экспозицией. [Подробная программа на сайте музея.](https://mmoma.ru/visit/gallery/luzhniki70/description?utm_source=luzhniki&utm_medium=email&utm_campaign=mmoma_luzhniki70&utm_content=exhibition)",
  exhibitionDetails: "Даты: с 31 июля по 29 ноября 2026 года.\nМесто: ММОМА, Гоголевский бульвар, 10/1.\nВремя работы: со вторника по воскресенье с 12:00 до 21:00.\nВозраст: 6+.",
  sections: [
    {
      title: "Регулярные экскурсии",
      events: [
        {
          title: "Экскурсия по выставке «Лужники. Есть место истории» для всех возрастных категорий",
          description: "Вместе с экспертами поговорим о том, как Лужники стали свидетелями важнейших событий страны, какие эпизоды из истории комплекса оказались в центре внимания художников и как искусство осмысляет культуру тела и физические возможности.",
          url: "https://mmoma.ru/visit/events/luzhniki70_tour/description",
          buttonLabel: "Подробнее",
          dateStyle: "range",
          dates: [{ label: "22 августа – 29 ноября", time: "" }]
        },
        {
          title: "Интерактивная экскурсия для детей 4–6 лет",
          description: "Дети будут сидеть на подушках прямо в залах, обсуждать произведения искусства и выполнять задания. Через игру они узнают, каким разным может быть движение и какие ощущения оно вызывает.",
          url: "https://mmoma.ru/visit/events/luzhniki70_tour_4-6/description?utm_source=luzhniki&utm_medium=email&utm_campaign=mmoma_luzhniki70&utm_content=kids_4_6",
          buttonLabel: "Подробнее",
          dateStyle: "range",
          dates: [{ label: "20 сентября – 29 ноября", time: "" }]
        },
        {
          title: "Интерактивная экскурсия для детей 7–11 лет",
          description: "Поговорим о движении и физических ощущениях через произведения современных художников, сыграем в игру и попробуем стать частью коллективного художественного действия.\n\nВсе подробности о стоимости, сеансах и билеты – на сайте ММОМА.",
          url: "https://mmoma.ru/visit/events/luzhniki70_tour_7-11/description?utm_source=luzhniki&utm_medium=email&utm_campaign=mmoma_luzhniki70&utm_content=kids_7_11",
          buttonLabel: "Подробнее",
          dateStyle: "range",
          dates: [{ label: "20 сентября – 29 ноября", time: "" }]
        }
      ]
    },
    {
      title: "Разовые события",
      events: [
        {
          title: "Танцевальные медиации «Между искусством и спортом»",
          description: "Что общего у искусства и спорта? Вместе с танц-художницами исследуем выставку «Лужники. Есть место истории» через движение. В основе двух авторских маршрутов – опыт пилатеса и фридайвинга: знакомые спортивные практики станут способом взаимодействия с искусством. Танцевальный опыт не требуется.",
          url: "https://bilet.mos.ru/event/730781257/",
          buttonLabel: "Подробнее",
          dateStyle: "list",
          dates: [
            { label: "21 ноября", time: "14:00–15:30" },
            { label: "28 ноября", time: "13:00–14:30" }
          ]
        },
        {
          title: "Театральная лаборатория с финальным показом на выставке для детей 8–12 лет",
          description: "Как ветер-путешественник мог бы увидеть Лужники в разные эпохи? На двухдневном интенсиве дети 8–12 лет познакомятся с выставкой и сказкой Евгения Клюева, а затем придумают продолжение истории. Во второй день участники отрепетируют и покажут свой спектакль в выставочных залах музея.",
          url: "https://mmoma1.timepad.ru/event/4270200/",
          buttonLabel: "Подробнее",
          dateStyle: "list",
          dates: [{ label: "22 и 29 ноября", time: "13:00–16:00" }]
        },
        {
          title: "Подслушано. Лужники. Прогулка по мечтам людей, спешащих в Лужники. Аудиоспекталь-прогулка",
          description: "Какими запомнились Лужники разным поколениям? Аудиопрогулка ММОМА и Лужников ведёт от музея на Гоголевском бульваре к спортивному комплексу. По пути услышим личные истории об Олимпиаде-80, Всемирном фестивале молодёжи и студентов и чемпионате мира по футболу – о мечтах, встречах и воспоминаниях, которые стоят за большими событиями.",
          url: "https://mmoma.timepad.ru/event/4303249/",
          buttonLabel: "Подробнее",
          dateStyle: "list",
          dates: [
            { label: "20 ноября", time: "19:30" },
            { label: "21 ноября", time: "17:00" },
            { label: "27 ноября", time: "19:30" },
            { label: "28 ноября", time: "18:00" }
          ]
        },
        {
          title: "Практикум для подростков «В отличной форме»",
          description: "Современное искусство станет отправной точкой для размышлений и дискуссий. На практикуме будем разбирать сложные темы шаг за шагом, замечать детали и обосновывать свою точку зрения. Здесь можно сомневаться, задавать вопросы и спорить без оценок и поиска единственного «правильного» мнения. Каждый практикум – самостоятельное занятие.",
          url: "https://mmoma.ru/visit/events/luzhniki70_teens/description",
          buttonLabel: "Подробнее",
          dateStyle: "list",
          dates: [{ label: "21 ноября", time: "16:00–17:30" }]
        }
      ]
    }
  ]
};

let state = loadState();
let saveTimer = null;
let toastTimer = null;
let pendingLink = null;

const elements = {
  saveStatus: document.querySelector("#saveStatus"),
  sectionsList: document.querySelector("#sectionsList"),
  previewFrame: document.querySelector("#previewFrame"),
  previewStage: document.querySelector("#previewStage"),
  codeOutput: document.querySelector("#codeOutput"),
  importInput: document.querySelector("#importInput"),
  toast: document.querySelector("#toast"),
  linkDialog: document.querySelector("#linkDialog"),
  linkUrlInput: document.querySelector("#linkUrlInput")
};

function openLinkDialog(editor, range, sync) {
  pendingLink = { editor, range: range.cloneRange(), sync };
  elements.linkUrlInput.value = "https://";
  elements.linkDialog.hidden = false;
  window.requestAnimationFrame(() => {
    elements.linkUrlInput.focus();
    elements.linkUrlInput.setSelectionRange(8, 8);
  });
}

function closeLinkDialog() {
  elements.linkDialog.hidden = true;
  pendingLink = null;
}

function applyPendingLink() {
  if (!pendingLink) return;
  let href = elements.linkUrlInput.value.trim();
  if (href && !/^https?:\/\//i.test(href)) href = `https://${href}`;
  if (!isSafeUrl(href)) {
    elements.linkUrlInput.focus();
    elements.linkUrlInput.setCustomValidity("Введите корректную ссылку");
    elements.linkUrlInput.reportValidity();
    return;
  }

  elements.linkUrlInput.setCustomValidity("");
  const selection = window.getSelection();
  pendingLink.editor.focus();
  selection.removeAllRanges();
  selection.addRange(pendingLink.range);
  document.execCommand("createLink", false, href);
  pendingLink.sync();
  closeLinkDialog();
  showToast("Ссылка добавлена к выделенному тексту");
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return clone(DEFAULT_DATA);
    return normalizeData(JSON.parse(stored));
  } catch (error) {
    console.warn("Не удалось загрузить черновик", error);
    return clone(DEFAULT_DATA);
  }
}

function normalizeData(input) {
  if (!input || typeof input !== "object") throw new Error("Неверный формат файла");
  return {
    pageTitle: String(input.pageTitle || ""),
    introText: String(input.introText || ""),
    exhibitionTitle: String(input.exhibitionTitle || ""),
    exhibitionText: String(input.exhibitionText || ""),
    exhibitionDetails: String(input.exhibitionDetails || ""),
    sections: Array.isArray(input.sections) ? input.sections.map(section => ({
      title: String(section?.title || ""),
      events: Array.isArray(section?.events) ? section.events.map(event => ({
        title: String(event?.title || ""),
        description: String(event?.description || ""),
        url: String(event?.url || ""),
        buttonLabel: String(event?.buttonLabel || "Подробнее"),
        dateStyle: event?.dateStyle === "range" ? "range" : "list",
        dates: Array.isArray(event?.dates) && event.dates.length
          ? event.dates.map(date => ({ label: String(date?.label || ""), time: String(date?.time || "") }))
          : [{ label: "", time: "" }]
      })) : []
    })) : []
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isSafeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function formatInline(value) {
  const source = String(value || "");
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let output = "";
  let cursor = 0;
  for (const match of source.matchAll(linkPattern)) {
    output += escapeHtml(source.slice(cursor, match.index));
    const label = escapeHtml(match[1]);
    const href = isSafeUrl(match[2]) ? escapeHtml(match[2]) : "#";
    output += `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    cursor = match.index + match[0].length;
  }
  output += escapeHtml(source.slice(cursor));
  return output;
}

function renderParagraphs(value, indent = "") {
  return String(value || "")
    .split(/\n\s*\n/)
    .map(item => item.trim())
    .filter(Boolean)
    .map(item => `${indent}<p>${formatInline(item.replace(/\n/g, " "))}</p>`)
    .join("\n");
}

function containsHtml(value) {
  return /<\/?(?:p|div|br|strong|b|em|i|u|ul|ol|li|a)\b/i.test(String(value || ""));
}

function sanitizeRichHtml(value) {
  const parser = new DOMParser();
  const source = parser.parseFromString(`<div>${String(value || "")}</div>`, "text/html").body.firstElementChild;
  const output = document.createElement("div");
  const allowedTags = new Set(["P", "BR", "STRONG", "B", "EM", "I", "U", "UL", "OL", "LI", "A"]);

  function cleanNode(node) {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent || "");
    if (node.nodeType !== Node.ELEMENT_NODE) return document.createDocumentFragment();

    const sourceTag = node.tagName.toUpperCase();
    const tag = sourceTag === "DIV" ? "P" : sourceTag;
    if (!allowedTags.has(tag)) {
      const fragment = document.createDocumentFragment();
      [...node.childNodes].forEach(child => fragment.append(cleanNode(child)));
      return fragment;
    }

    if (tag === "A") {
      const href = node.getAttribute("href") || "";
      if (!isSafeUrl(href)) {
        const fragment = document.createDocumentFragment();
        [...node.childNodes].forEach(child => fragment.append(cleanNode(child)));
        return fragment;
      }
    }

    const clean = document.createElement(tag.toLowerCase());
    if (tag === "A") {
      clean.setAttribute("href", node.getAttribute("href"));
      clean.setAttribute("target", "_blank");
      clean.setAttribute("rel", "noopener noreferrer");
    }
    [...node.childNodes].forEach(child => clean.append(cleanNode(child)));
    return clean;
  }

  [...source.childNodes].forEach(node => output.append(cleanNode(node)));
  return output.innerHTML
    .replace(/<p><br><\/p>/g, "")
    .replace(/(?:<br>){3,}/g, "<br><br>")
    .trim();
}

function toEditorHtml(value) {
  if (!value) return "";
  return containsHtml(value) ? sanitizeRichHtml(value) : renderParagraphs(value);
}

function renderRichText(value, indent = "") {
  const html = toEditorHtml(value);
  if (!html) return "";
  return html.split("\n").map(line => `${indent}${line}`).join("\n");
}

function initializeRichEditor(editor, getValue, setValue) {
  const shell = editor.closest(".rich-editor-shell");
  const toolbar = shell.querySelector(".rich-toolbar");
  let savedRange = null;

  if (!toolbar.childElementCount) {
    toolbar.append(document.querySelector("#richToolbarTemplate").content.cloneNode(true));
  }

  if (!editor.dataset.richReady) {
    const rememberSelection = () => {
      const selection = window.getSelection();
      if (selection.rangeCount && editor.contains(selection.anchorNode)) {
        savedRange = selection.getRangeAt(0).cloneRange();
      }
    };

    const restoreSelection = () => {
      editor.focus();
      if (!savedRange) return false;
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(savedRange);
      return true;
    };

    const sync = () => {
      setValue(sanitizeRichHtml(editor.innerHTML));
      refreshOutput();
      rememberSelection();
    };

    const updateToolbar = () => {
      toolbar.querySelectorAll("[data-command]").forEach(button => {
        const command = button.dataset.command;
        const supportsState = ["bold", "italic", "underline", "insertUnorderedList", "insertOrderedList"].includes(command);
        button.classList.toggle("is-active", supportsState && document.queryCommandState(command));
      });
    };

    editor.addEventListener("input", sync);
    editor.addEventListener("keyup", () => {
      rememberSelection();
      updateToolbar();
    });
    editor.addEventListener("mouseup", () => {
      rememberSelection();
      updateToolbar();
    });
    editor.addEventListener("focus", rememberSelection);
    editor.addEventListener("blur", () => {
      const clean = sanitizeRichHtml(editor.innerHTML);
      if (clean !== editor.innerHTML) editor.innerHTML = clean;
      setValue(clean);
    });
    editor.addEventListener("paste", event => {
      event.preventDefault();
      const html = event.clipboardData.getData("text/html");
      const text = event.clipboardData.getData("text/plain");
      const content = html
        ? sanitizeRichHtml(html)
        : escapeHtml(text).replace(/\r?\n/g, "<br>");
      document.execCommand("insertHTML", false, content);
      sync();
    });

    toolbar.addEventListener("mousedown", event => {
      if (event.target.closest("button")) {
        rememberSelection();
        event.preventDefault();
      }
    });

    toolbar.addEventListener("click", event => {
      const button = event.target.closest("button");
      if (!button) return;
      restoreSelection();

      if (button.dataset.action === "link") {
        if (!savedRange || savedRange.collapsed) {
          showToast("Сначала выделите текст для ссылки");
          return;
        }
        openLinkDialog(editor, savedRange, sync);
        return;
      } else if (button.dataset.action === "clear") {
        document.execCommand("removeFormat", false);
        document.execCommand("unlink", false);
      } else if (button.dataset.command) {
        document.execCommand(button.dataset.command, false);
      }

      sync();
      updateToolbar();
    });

    editor.dataset.richReady = "true";
  }

  if (document.activeElement !== editor) editor.innerHTML = toEditorHtml(getValue());
}

function renderDetails(value) {
  return String(value || "")
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean)
    .map(item => {
      const colon = item.indexOf(":");
      if (colon < 0) return `      <p>${formatInline(item)}</p>`;
      const label = item.slice(0, colon + 1);
      const rest = item.slice(colon + 1).trim();
      return `      <p><strong>${escapeHtml(label)}</strong>${rest ? ` ${formatInline(rest)}` : ""}</p>`;
    })
    .join("\n");
}

function renderEvent(event) {
  const dates = event.dates.length ? event.dates : [{ label: "", time: "" }];
  const datesMarkup = event.dateStyle === "range"
    ? `      <div class="mmoma-date__range">${escapeHtml(dates[0]?.label || "")}</div>`
    : dates.map(date => `      <div class="mmoma-date__item">
        <div class="mmoma-date__day">${escapeHtml(date.label)}</div>${date.time ? `
        <div class="mmoma-date__info">${escapeHtml(date.time)}</div>` : ""}
      </div>`).join("\n");
  const button = isSafeUrl(event.url)
    ? `    <a class="mmoma-button" href="${escapeHtml(event.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(event.buttonLabel || "Подробнее")}</a>`
    : `    <span class="mmoma-button">${escapeHtml(event.buttonLabel || "Подробнее")}</span>`;

  return `  <div class="mmoma-event">
    <div class="mmoma-date">
${datesMarkup}
    </div>
    <div class="mmoma-content">
      <h3>${escapeHtml(event.title)}</h3>
${renderRichText(event.description, "      ")}
    </div>
${button}
  </div>`;
}

function generateMarkup(data) {
  const intro = renderRichText(data.introText, "    ");
  const exhibition = renderRichText(data.exhibitionText, "  ");
  const details = renderDetails(data.exhibitionDetails);
  const sections = data.sections.map(section => `  <section class="mmoma-program__events">
  <h2>${escapeHtml(section.title)}</h2>

${section.events.map(renderEvent).join("\n\n")}
  </section>`).join("\n\n");

  return `<div class="mmoma-program">
  <div class="mmoma-program__text">
  <h1>${escapeHtml(data.pageTitle)}</h1>

  <div class="mmoma-intro">
${intro}
  </div>

  <h2>${escapeHtml(data.exhibitionTitle)}</h2>
${exhibition}

  <div class="mmoma-exhibition__details">
${details}
  </div>

  </div>

${sections}
</div>`;
}

function generateSnippet(data = state) {
  return `<style>\n${EXPORT_CSS}\n</style>\n${generateMarkup(data)}`;
}

function generatePreviewDocument() {
  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
html { background: #fff; }
body { margin: 0; padding: 48px 30px 80px; font-family: Arial, sans-serif; }
@media (max-width: 600px) { body { padding: 28px 18px 60px; } }
${EXPORT_CSS}
</style>
</head>
<body>${generateMarkup(state)}</body>
</html>`;
}

function queueSave() {
  elements.saveStatus.classList.add("is-saving");
  elements.saveStatus.lastChild.textContent = " Сохраняется";
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    elements.saveStatus.classList.remove("is-saving");
    elements.saveStatus.lastChild.textContent = " Сохранено";
  }, 250);
}

function refreshOutput() {
  elements.previewFrame.srcdoc = generatePreviewDocument();
  elements.codeOutput.value = generateSnippet();
  queueSave();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2400);
}

function emptyEvent() {
  return {
    title: "Новое событие",
    description: "",
    url: "",
    buttonLabel: "Подробнее",
    dateStyle: "list",
    dates: [{ label: "", time: "" }]
  };
}

function renderDateRow(date, dateIndex, event) {
  const row = document.querySelector("#dateTemplate").content.firstElementChild.cloneNode(true);
  row.querySelector(".date-row__index").textContent = String(dateIndex + 1).padStart(2, "0");
  const labelInput = row.querySelector(".date-label");
  const timeInput = row.querySelector(".date-time");
  labelInput.value = date.label;
  timeInput.value = date.time;
  labelInput.addEventListener("input", () => {
    date.label = labelInput.value;
    refreshOutput();
  });
  timeInput.addEventListener("input", () => {
    date.time = timeInput.value;
    refreshOutput();
  });
  row.querySelector(".delete-date").addEventListener("click", () => {
    if (event.dates.length === 1) {
      event.dates[0] = { label: "", time: "" };
    } else {
      event.dates.splice(dateIndex, 1);
    }
    renderEditor();
    refreshOutput();
  });
  return row;
}

function renderEventCard(event, eventIndex, section) {
  const card = document.querySelector("#eventTemplate").content.firstElementChild.cloneNode(true);
  const toggle = card.querySelector(".event-card__toggle");
  const name = card.querySelector(".event-card__name");
  card.querySelector(".event-card__number").textContent = String(eventIndex + 1).padStart(2, "0");
  name.textContent = event.title || "Без названия";

  toggle.addEventListener("click", () => {
    const open = card.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  const titleInput = card.querySelector(".event-title");
  const descriptionInput = card.querySelector(".event-description");
  const urlInput = card.querySelector(".event-url");
  const labelInput = card.querySelector(".event-button-label");
  const dateStyle = card.querySelector(".date-style");

  titleInput.value = event.title;
  urlInput.value = event.url;
  labelInput.value = event.buttonLabel;
  dateStyle.value = event.dateStyle;
  initializeRichEditor(descriptionInput, () => event.description, value => {
    event.description = value;
  });

  titleInput.addEventListener("input", () => {
    event.title = titleInput.value;
    name.textContent = event.title || "Без названия";
    refreshOutput();
  });
  urlInput.addEventListener("input", () => {
    event.url = urlInput.value;
    refreshOutput();
  });
  labelInput.addEventListener("input", () => {
    event.buttonLabel = labelInput.value;
    refreshOutput();
  });
  dateStyle.addEventListener("change", () => {
    event.dateStyle = dateStyle.value;
    refreshOutput();
  });

  const datesList = card.querySelector(".dates-list");
  event.dates.forEach((date, dateIndex) => datesList.append(renderDateRow(date, dateIndex, event)));

  card.querySelector(".add-date").addEventListener("click", () => {
    event.dates.push({ label: "", time: "" });
    renderEditor();
    refreshOutput();
  });
  card.querySelector(".duplicate-event").addEventListener("click", () => {
    section.events.splice(eventIndex + 1, 0, clone(event));
    renderEditor();
    refreshOutput();
    showToast("Создана копия события");
  });
  card.querySelector(".delete-event").addEventListener("click", () => {
    if (!window.confirm(`Удалить событие «${event.title || "Без названия"}»?`)) return;
    section.events.splice(eventIndex, 1);
    renderEditor();
    refreshOutput();
  });
  card.querySelector(".move-event-up").addEventListener("click", () => {
    if (eventIndex === 0) return;
    [section.events[eventIndex - 1], section.events[eventIndex]] = [section.events[eventIndex], section.events[eventIndex - 1]];
    renderEditor();
    refreshOutput();
  });
  card.querySelector(".move-event-down").addEventListener("click", () => {
    if (eventIndex >= section.events.length - 1) return;
    [section.events[eventIndex + 1], section.events[eventIndex]] = [section.events[eventIndex], section.events[eventIndex + 1]];
    renderEditor();
    refreshOutput();
  });
  return card;
}

function renderSectionCard(section, sectionIndex) {
  const card = document.querySelector("#sectionTemplate").content.firstElementChild.cloneNode(true);
  const titleInput = card.querySelector(".section-title-input");
  const eventsList = card.querySelector(".events-list");
  titleInput.value = section.title;
  titleInput.addEventListener("input", () => {
    section.title = titleInput.value;
    refreshOutput();
  });
  section.events.forEach((event, eventIndex) => eventsList.append(renderEventCard(event, eventIndex, section)));

  card.querySelector(".add-event").addEventListener("click", () => {
    section.events.push(emptyEvent());
    renderEditor();
    refreshOutput();
  });
  card.querySelector(".delete-section").addEventListener("click", () => {
    if (!window.confirm(`Удалить раздел «${section.title || "Без названия"}» и все события в нём?`)) return;
    state.sections.splice(sectionIndex, 1);
    renderEditor();
    refreshOutput();
  });
  card.querySelector(".move-up").addEventListener("click", () => {
    if (sectionIndex === 0) return;
    [state.sections[sectionIndex - 1], state.sections[sectionIndex]] = [state.sections[sectionIndex], state.sections[sectionIndex - 1]];
    renderEditor();
    refreshOutput();
  });
  card.querySelector(".move-down").addEventListener("click", () => {
    if (sectionIndex >= state.sections.length - 1) return;
    [state.sections[sectionIndex + 1], state.sections[sectionIndex]] = [state.sections[sectionIndex], state.sections[sectionIndex + 1]];
    renderEditor();
    refreshOutput();
  });
  return card;
}

function renderEditor() {
  document.querySelectorAll("[data-path]").forEach(input => {
    input.value = state[input.dataset.path] || "";
  });
  document.querySelectorAll("[data-rich-path]").forEach(editor => {
    const path = editor.dataset.richPath;
    initializeRichEditor(editor, () => state[path], value => {
      state[path] = value;
    });
  });
  elements.sectionsList.replaceChildren();
  state.sections.forEach((section, index) => elements.sectionsList.append(renderSectionCard(section, index)));
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.querySelectorAll("[data-path]").forEach(input => {
  input.addEventListener("input", () => {
    state[input.dataset.path] = input.value;
    refreshOutput();
  });
});

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("is-active", tab === button));
    document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.toggle("is-active", panel.dataset.panel === button.dataset.tab));
  });
});

document.querySelectorAll(".viewport-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".viewport-button").forEach(item => item.classList.toggle("is-active", item === button));
    elements.previewStage.dataset.viewport = button.dataset.width;
  });
});

document.querySelector("#addSectionButton").addEventListener("click", () => {
  state.sections.push({ title: "Новый раздел", events: [emptyEvent()] });
  renderEditor();
  refreshOutput();
});

document.querySelector("#downloadButton").addEventListener("click", () => {
  downloadFile("programma-mmoma.html", generateSnippet(), "text/html;charset=utf-8");
  showToast("HTML-файл скачан");
});

document.querySelector("#backupButton").addEventListener("click", () => {
  downloadFile("programma-mmoma-backup.json", JSON.stringify(state, null, 2), "application/json;charset=utf-8");
  showToast("Резервная копия скачана");
});

document.querySelector("#importButton").addEventListener("click", () => elements.importInput.click());

elements.importInput.addEventListener("change", async () => {
  const file = elements.importInput.files?.[0];
  elements.importInput.value = "";
  if (!file) return;
  try {
    state = normalizeData(JSON.parse(await file.text()));
    renderEditor();
    refreshOutput();
    showToast("Данные импортированы");
  } catch (error) {
    window.alert(`Не удалось импортировать файл: ${error.message}`);
  }
});

document.querySelector("#resetButton").addEventListener("click", () => {
  if (!window.confirm("Вернуть исходный пример? Текущий черновик будет заменён.")) return;
  state = clone(DEFAULT_DATA);
  renderEditor();
  refreshOutput();
  showToast("Исходный пример восстановлен");
});

document.querySelector("#copyButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(generateSnippet());
  } catch {
    elements.codeOutput.select();
    document.execCommand("copy");
  }
  showToast("HTML скопирован");
});

document.querySelector("#linkDialogApply").addEventListener("click", applyPendingLink);
document.querySelector("#linkDialogCancel").addEventListener("click", closeLinkDialog);
document.querySelector("#linkDialogClose").addEventListener("click", closeLinkDialog);
elements.linkDialog.addEventListener("click", event => {
  if (event.target === elements.linkDialog) closeLinkDialog();
});
elements.linkUrlInput.addEventListener("input", () => elements.linkUrlInput.setCustomValidity(""));
elements.linkUrlInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    applyPendingLink();
  }
  if (event.key === "Escape") closeLinkDialog();
});

renderEditor();
refreshOutput();
