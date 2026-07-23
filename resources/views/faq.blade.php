<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>FAQ — {{ config('app.name', 'AutoProExpress') }}</title>

        @vite(['resources/css/app.css', 'resources/js/faq.jsx'])
    </head>
    <body class="text-brand-ink">
        <div id="nav-root"></div>

        <header class="relative overflow-hidden bg-gradient-to-b from-[#EFF9FF] to-[#DDF2FE] px-[22px] py-[96px] text-center md:px-14 md:py-[128px]">
            <div
                class="absolute inset-0"
                style="background-image: linear-gradient(rgba(14,165,233,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.08) 1px, transparent 1px); background-size: 60px 60px;"
            ></div>
            <div class="relative mx-auto max-w-[820px]">
                <div class="mb-[26px] text-[10px] font-semibold tracking-[4px] text-brand-blue">
                    QUESTIONS, ANSWERED
                </div>
                <h1 class="mb-6 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] md:text-[50px]">
                    FREQUENTLY ASKED <span class="text-brand-blue">QUESTIONS</span>
                </h1>
                <p class="mx-auto max-w-[560px] text-[15.5px] leading-relaxed text-brand-muted">
                    Everything you need to know about bidding, shipping, customs, and delivery — organized by topic.
                </p>
            </div>
        </header>

        <section x-data="faqPage()" class="bg-white px-[22px] py-24 md:px-14">
            <div class="mx-auto mb-16 max-w-[720px]">
                <div class="relative">
                    <span class="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-brand-faint">⌕</span>
                    <input
                        type="text"
                        x-model="query"
                        placeholder="Search FAQs — try 'refund' or 'customs'..."
                        class="w-full rounded-md border border-brand-line bg-brand-fog py-3.5 pr-4 pl-11 text-[14px] text-brand-ink outline-none focus:border-brand-blue"
                    >
                </div>
            </div>

            <div class="mx-auto max-w-[820px]">
                <template x-for="cat in categories" :key="cat.name">
                    <div x-show="categoryHasMatches(cat)" class="mb-12 last:mb-0">
                        <h2 class="mb-5 font-heading text-[13px] font-bold tracking-[2px] text-brand-blue" x-text="cat.name"></h2>

                        <div class="divide-y divide-brand-line rounded-xl border border-brand-line">
                            <template x-for="item in cat.items" :key="item.id">
                                <div x-show="matches(item)">
                                    <button
                                        type="button"
                                        @click="toggle(item.id)"
                                        class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                    >
                                        <span class="text-[14.5px] font-semibold" x-text="item.q"></span>
                                        <span
                                            class="flex-none text-[18px] leading-none text-brand-blue transition-transform duration-200"
                                            :class="openId === item.id ? 'rotate-45' : ''"
                                        >+</span>
                                    </button>
                                    <div x-show="openId === item.id" x-collapse>
                                        <p class="px-6 pb-5 text-[13.5px] leading-relaxed text-brand-muted" x-text="item.a"></p>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>

                <div x-show="!categories.some((cat) => categoryHasMatches(cat))" class="py-16 text-center text-[14px] text-brand-muted">
                    No questions match “<span x-text="query"></span>” — try a different search term.
                </div>
            </div>
        </section>

        <section class="bg-gradient-to-br from-brand-blue to-brand-blue-hover px-[22px] py-[88px] text-center text-white md:px-14">
            <div class="mx-auto max-w-[680px]">
                <h2 class="mb-4 font-heading text-[30px] font-bold tracking-[-1px] md:text-[36px]">
                    STILL HAVE QUESTIONS?
                </h2>
                <p class="mb-9 text-[15px] leading-relaxed text-white/90">
                    Our support team is on hand to walk you through your import, quote, or dealer application.
                </p>
                <div class="flex flex-wrap justify-center gap-3.5">
                    <a
                        href="https://wa.me/2347089111001"
                        target="_blank"
                        rel="noopener"
                        class="inline-flex items-center rounded-md bg-white px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-brand-blue hover:bg-brand-blue-tint"
                    >
                        CHAT ON WHATSAPP
                    </a>
                    <a
                        href="/#contact"
                        class="inline-flex items-center rounded-md border border-white/50 bg-transparent px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-white hover:border-white"
                    >
                        CONTACT SUPPORT
                    </a>
                </div>
            </div>
        </section>

        <div id="footer-root"></div>
    </body>
</html>
