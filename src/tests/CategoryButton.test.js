import { render } from "@testing-library/svelte";
import { axe } from "vitest-axe";
import { Code } from "lucide-svelte";
import CategoryButton from "$lib/components/CategoryButton.svelte";


const mock = {
    id: 'languages',
    label: 'LANGUAGES',
    icon: Code
};

describe('CategoryButton a11y', () => {
    it('has no a11y violations while inactive', async () => {
        const { container } = render(CategoryButton, {
            props: { 
                category: mock,
                isActive: false,
                onclick: () => {},
            }
        });

        const results = await axe(container);
        expect(results.violations).toEqual([]);
    });

    it('has no a11y violations while active', async () => {
        const { container } = render(CategoryButton, {
            props: { 
                category: mock,
                isActive: true,
                onclick: () => {},
            }
        });

        const results = await axe(container);
        expect(results.violations).toEqual([]);
    });
})