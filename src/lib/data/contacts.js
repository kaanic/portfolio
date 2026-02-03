import { Github, Mail, Linkedin } from "lucide-svelte";

export const contacts = [
    {
        icon: Mail,
        type: "EMAIL",
        address: "kaanic1337@gmail.com",
        url: "mailto:kaanic1337@gmail.com"
    },
    {
        icon: Linkedin,
        type: "LINKEDIN",
        address: "linked.in/kaanic",
        url: "https://google.com"
    },
    {
        icon: Github,
        type: "GITHUB",
        address: "github.com/kaanic",
        url: "https://github.com/kaanic"
    }
];