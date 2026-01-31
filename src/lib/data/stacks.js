import { Code, Monitor, Server, Wrench } from 'lucide-svelte';

export const categories = [
    { id: 'languages', label: 'LANGUAGES', icon: Code },
    { id: 'frontend', label: 'FRONTEND', icon: Monitor },
    { id: 'backend', label: 'BACKEND', icon: Server },
    { id: 'devops', label: 'DEVOPS', icon: Wrench }
];

export const techStackCategories = {
    languages: [
        { name: 'JavaScript', proficiency: 'expert' },
        { name: 'TypeScript', proficiency: 'advanced' },
        { name: 'KaanScript', proficiency: 'intermediate' },
        { name: 'GDscript', proficiency: 'expert' }
    ],
    frontend: [
        { name: 'React', proficiency: 'advanced' },
        { name: 'Svelte', proficiency: 'intermediate' },
        { name: 'React Native', proficiency: 'beginner' },
        { name: 'HTML/CSS', proficiency: 'expert' }
    ],
    backend: [
        { name: 'Node.js', proficiency: 'advanced' },
        { name: 'FastAPI', proficiency: 'advanced' },
        { name: 'Flask', proficiency: 'intermediate' },
        { name: 'MySQL', proficiency: 'intermediate' }
    ],
    devops: [
        { name: 'Docker', proficiency: 'advanced' },
        { name: 'Kubernetes', proficiency: 'beginner' },
        { name: 'Azure', proficiency: 'intermediate' },
        { name: 'Git', proficiency: 'expert' }
    ]
};