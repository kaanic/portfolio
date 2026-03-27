import { render } from "@testing-library/svelte";
import { axe } from "vitest-axe";
import { Mail } from "lucide-svelte";
import ContactItem from "$lib/components/ContactItem.svelte";


describe('ContactItem a11y', () => {
    it('has no a11y violations', async () => {
        const { container } = render(ContactItem, {
            props: {
                Icon: Mail,
                type: 'EMAIL',
                address: 'test@example.com',
                url: 'mailto:test@example.com'
            }
        });

        const results = await axe(container);
        expect(results.violations).toEqual([]);
    })
})