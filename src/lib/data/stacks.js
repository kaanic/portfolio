import { Code, Monitor, Server, Wrench } from 'lucide-svelte';

export const categories = [
    { id: 'languages', label: 'LANGUAGES', icon: Code },
    { id: 'frontend', label: 'FRONTEND', icon: Monitor },
    { id: 'backend', label: 'BACKEND', icon: Server },
    { id: 'other', label: 'OTHER', icon: Wrench }
];

export const techStackCategories = {
    languages: [
        { name: 'C/C++', proficiency: 'beginner' },
        { name: 'C#', proficiency: 'intermediate' },
        { name: 'GDscript', proficiency: 'expert' },
        { name: 'JavaScript', proficiency: 'advanced' },
        { name: 'PHP', proficiency: 'beginner' },
        { name: 'Python', proficiency: 'advanced' }
    ],
    frontend: [
        { name: 'Astro', proficiency: 'beginner' },
        { name: 'HTML/CSS', proficiency: 'expert' },
        { name: 'React', proficiency: 'advanced' },
        { name: 'React Native', proficiency: 'intermediate' },
        { name: 'Svelte', proficiency: 'advanced' },
        { name: 'Vue', proficiency: 'beginner' }
    ],
    backend: [
        { name: 'Django', proficiency: 'beginner' },
        { name: 'MySQL', proficiency: 'advanced' },
        { name: 'Node.js', proficiency: 'advanced' },
        { name: 'RestAPI', proficiency: 'intermediate' },
    ],
    other: [
        { name: 'Azure', proficiency: 'intermediate' },
        { name: 'Docker', proficiency: 'intermediate' },
        { name: 'Git', proficiency: 'advanced' },
        { name: 'Godot', proficiency: 'expert' },
        { name: 'Robot Framework', proficiency: 'intermediate' },
        { name: 'Unity', proficiency: 'advanced' },
    ]
};