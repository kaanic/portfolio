import { render } from '@testing-library/svelte';
import { axe } from 'vitest-axe';
import SkillCard from '$lib/components/SkillCard.svelte';


const mock = {
    name: 'minecraft',
    proficiency: 'advanced'
};

describe('SkillCard a11y', () => {
    it('has no a11y violations', async () => {
        const { container } = render(SkillCard, {
            props: { skill: mock }
        });

        const result = await axe(container);
        expect(result.violations).toEqual([]);
    });

    it('has no a11y violations for each proficiency', async () => {
        for (const proficiency of ['expert', 'advanced', 'intermediate', 'beginner']) {
            const { container } = render(SkillCard, {
                props: { skill: {...mock, proficiency: proficiency} }
            });

            const result = await axe(container);
            expect(result.violations).toEqual([]);
        }
    });
})