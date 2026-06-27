function loadTemplate(templateId, targetId) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);
    document.getElementById(targetId).appendChild(clone);
}

async function loadComponents() {
    const res = await fetch("template.html");
    const html = await res.text();

    const temp = document.createElement("div");
    temp.innerHTML = html;

    document.body.appendChild(temp);

    loadTemplate("blog_template", "blogger");
    loadTemplate("contact_template", "contact");
}

loadComponents();