<script lang="ts">
    import { onMount } from "svelte";
    export let target_date: Date;

    const st = 60 * 1000;
    const mst = 60 * st;
    const dtst = 24 * 60 * st;
    const m = Math.floor;
    const mi = (t: number) => Math.max(t, 0);

    let time = new Date();
    $: ms = target_date.getTime() - time.getTime();
    $: days = m(ms / dtst);
    $: hours = m((ms % dtst) / mst);
    $: minutes = m((ms % mst) / st);
    $: sec = m((ms % st) / 1000);

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="flex gap-5 subpixel-antialiased	font-mono slashed-zero tabular-nums">
    <div>
        <span class="countdown font-mono text-4xl">
            <span style={`--value:${days};`} />
        </span>
        days
    </div>
    <div>
        <span class="countdown font-mono text-4xl">
            <span style={`--value:${hours};`} />
        </span>
        hours
    </div>
    <div>
        <span class="countdown font-mono text-4xl">
            <span style={`--value:${minutes};`} />
        </span>
        min
    </div>
    <div>
        <span class="countdown font-mono text-4xl">
            <span style={`--value:${sec};`} />
        </span>
        sec
    </div>
</div>
