import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { PracticeAddressLink } from "@/components/site/AddressLink";

export const Route = createFileRoute("/zh")({
  head: () => ({
    meta: [
      { title: "万锦 Unionville 中文牙科信息 | Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "Unionville 和 Markham 患者中文牙科信息：新患者预约、CDCP、地址、营业时间、常见服务和就诊前准备。",
      },
      {
        property: "og:title",
        content: "Unionville / Markham 中文牙科信息",
      },
      {
        property: "og:description",
        content: "Dr. J. David Dudley & Associates 的中文患者信息页面。",
      },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "zh-Hans", href: "/zh" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "zh-Hans",
          mainEntity: [
            {
              "@type": "Question",
              name: "诊所是否接受新患者？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "是。新患者可致电 (905) 477-5825 预约，并询问首次就诊需要携带的资料。",
              },
            },
            {
              "@type": "Question",
              name: "诊所是否接受 CDCP？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "是。诊所接受 Canadian Dental Care Program。请携带 CDCP 资料、政府身份证件和任何私人保险资料。",
              },
            },
            {
              "@type": "Question",
              name: "诊所在哪里？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "诊所位于 4359 Highway #7, Unionville, ON L3R 1M1，服务 Unionville 和 Markham 周边家庭。",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ChineseInfo,
});

function ChineseInfo() {
  return (
    <>
      <PageHeader
        eyebrow="中文患者信息"
        title={<>中文牙科信息。</>}
        intro="本页为万锦及 Unionville 中文患者提供就诊前信息。预约、保险和治疗细节以英文诊所记录为准；如需语言协助，请预约前致电确认。"
      />

      <section className="container-prose grid gap-4 md:grid-cols-3">
        {[
          ["接受新患者", "请致电 (905) 477-5825 询问预约时间和首次就诊资料。"],
          ["接受 CDCP", "请携带 CDCP 资料、政府身份证件和私人保险资料。"],
          ["方便到达", "Highway 7 地址，现场停车，诊所可轮椅通行。"],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl tracking-tight text-primary">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </article>
        ))}
      </section>

      <section className="container-prose mt-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-foreground/85">
          <h2 className="font-display text-3xl tracking-tight text-foreground">常见牙科服务</h2>
          <p>
            Dr. J. David Dudley & Associates 提供家庭牙科、儿童和成人预防护理、洗牙检查、
            补牙、牙冠牙桥、牙齿美白、贴面、植牙相关修复、夜磨牙护牙套、TMJ 相关护理等服务。
          </p>
          <p>
            首次就诊通常会包括健康资料填写、病史和用药情况确认、口腔检查、牙周评估、 需要时拍摄 X
            光，并由牙医解释发现和下一步治疗选择。
          </p>
          <p>如果您想确认费用、保险、CDCP、语言协助或是否适合老人/儿童就诊，请预约前致电诊所。</p>
        </div>

        <aside className="lg:col-span-5 rounded-3xl border border-border bg-card p-8">
          <h2 className="font-display text-3xl tracking-tight">地址与营业时间</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              地址：
              <PracticeAddressLink className="text-primary underline underline-offset-2" />
            </p>
            <p>
              电话：
              <a className="text-primary underline underline-offset-2" href="tel:9054775825">
                (905) 477-5825
              </a>
            </p>
            <p>时间：周一至周二 8am-7pm；周三至周四 8am-5pm；周五 7:30am-1pm。</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              预约 / 联系
            </Link>
            <Link
              to="/cdcp"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
            >
              CDCP 信息
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
