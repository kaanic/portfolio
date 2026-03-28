import { render } from "@testing-library/svelte";
import { axe } from "vitest-axe";
import JobLog from "$lib/components/JobLog.svelte";


const mock = {
    level: 'LVL 2',
    role: 'Test Role',
    company: 'Test Company',
    period: '2024 - PRESENT',
    status: 'ACTIVE',
    achievements: [
        'Achievement one',
        'Achievement two',
        'Achievement three'
    ]
};

describe('JobLog a11y', () => {
    it('has no a11y violations while "ACTIVE"', async () => {
        const { container } = render(JobLog, {
            props: { job: mock }
        });

        const results = await axe(container);
        expect(results.violations).toEqual([]);
    });

    it('has no a11y violations while "COMPLETED"', async () => {
        const { container } = render(JobLog, {
            props: { job: { ...mock, status: 'COMPLETED' }}
        });

        const results = await axe(container);
        expect(results.violations).toEqual([]);
    })
})