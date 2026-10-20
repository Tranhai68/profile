import asyncio
from playwright.async_api import async_playwright

async def generate_pdf():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://127.0.0.1:5173/", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        
        # Emulate print media and save PDF
        await page.emulate_media(media="screen")
        await page.pdf(
            path="Tran-Hai-Portfolio-Web.pdf",
            format="A4",
            print_background=True,
            margin={"top": "10mm", "bottom": "10mm", "left": "10mm", "right": "10mm"}
        )
        await browser.close()
        print("Generated Tran-Hai-Portfolio-Web.pdf successfully")

asyncio.run(generate_pdf())
