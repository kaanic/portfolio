import { render } from "@testing-library/svelte";
import { axe } from "vitest-axe";
import ProjectCard from "$lib/components/ProjectCard.svelte";


const mock = {
    title: 'TEST PROJECT',
    desc: 'A test project description',
    tech: ['JavaScript', 'Svelte'],
    status: 'COMPLETED',
    image: 'images/test.webp',
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/test'
}

describe('ProjectCard a11y', () => {
    it('has no a11y violations', async () => {
        const { container } = render(ProjectCard, {
            props: { project: mock }
        });

        const results = await axe(container);
        expect(results.violations).toEqual([]);
    });

    it('has no a11y violations with no URLs', async () => {
        const { container } = render(ProjectCard, {
            props: { project: {...mock, demoUrl: null, codeUrl: null}}
        });

        const results = await axe(container);
        expect(results.violations).toEqual([]);
    });
})