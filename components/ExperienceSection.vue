<template>
  <section>
    <div class="container">
      <SectionHeader
        tag="Career path"
        title="Professional Experience"
        subTitle="A look at the path I've taken and the skills I've built along the way."
        color="secondary"
      >
        <div class="flex mb-6">
          <nav class="mx-auto">
            <a href="#work" class="mr-4 text-blue-600 hover:underline">
              Work
            </a>
            <a href="#education" class="mr-4 text-blue-600 hover:underline">
              Education
            </a>
            <a
              href="#certifications"
              class="mr-4 text-blue-600 hover:underline"
            >
              Certifications
            </a>
            <a href="#skills" class="text-blue-600 hover:underline"> Skills </a>
          </nav>
        </div>
      </SectionHeader>

      <div class="mt-10">
        <a
          href="/docs/resume.pdf"
          download
          class="flex justify-center text-gray-500"
        >
          <Icon name="lucide:download" class="w-6 h-6 mr-3" />
          Download Resume
        </a>
      </div>

      <div>
        <p>
          My background spans FPGA development, verification, and tooling within
          defense and aerospace programs, with a focus on DO-254 compliance and
          high-reliability standards. This work continues to shape how I
          approach complex systems and structured engineering workflows.
        </p>

        <p>
          Over time, I’ve expanded into areas like CI/CD integration, formal
          verification flows, and collaboration between hardware and software
          teams. More recently, I’ve been applying those same principles to
          DevOps and automation.
        </p>

        <p>
          This section outlines the roles, programs, education, certifications,
          and tools that have defined my professional path so far.
        </p>
      </div>

      <div id="work" class="block">
        <h3 class="text-2xl font-semibold mb-4">Professional Work</h3>

        <article class="mb-8">
          <h4 class="text-xl font-semibold">
            L3Harris Technologies – FPGA Design & Verification Engineer
          </h4>
          <p class="text-gray-600 italic">
            Palm Bay, FL &middot; Jan 2021 – Present
          </p>
          <p class="text-sm text-gray-500 mb-2">
            Promoted from Level 1 to Level 2 Engineer (2021 → 2023)
          </p>

          <div class="mt-4">
            <h5 class="text-lg font-semibold">
              NextGen IRAD – 100G Ethernet (2023–2024)
            </h5>
            <ul class="list-disc list-inside ml-4 text-gray-800">
              <li>
                Led integration of 100G Ethernet module using vendor IP with
                MORA framing, UDP/IP, and MAC interfaces.
              </li>
              <li>
                Resolved timing closure and cross-domain clocking issues using
                AXI Stream and CDC FIFOs.
              </li>
              <li>
                Optimized GT and CMAC placement for full system-level handoff
                and downstream testing.
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <h5 class="text-lg font-semibold">
              Military Displays – SMFD & CMFD (2021–2023)
            </h5>
            <ul class="list-disc list-inside ml-4 text-gray-800">
              <li>
                Contributed to DO-254 DAL-A compliant workflows for five FPGAs
                across avionics programs.
              </li>
              <li>
                Developed UVM testbenches, ran regressions, and debugged
                verification issues.
              </li>
              <li>
                Participated in CoDR, DDR, and HTP reviews with traceability
                using IBM DOORs.
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <h5 class="text-lg font-semibold">Burma – BERTE FPGA (2022)</h5>
            <ul class="list-disc list-inside ml-4 text-gray-800">
              <li>
                Updated Spartan-6 design to support telemetry/command validation
                and watchdog logic.
              </li>
              <li>
                Owned full simulation, synthesis, and build handoff lifecycle
                for integration team.
              </li>
              <li>
                Presented design reviews across startup, requirements, and
                implementation phases.
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <h5 class="text-lg font-semibold">
              Internal DevOps Initiative (2021–2022)
            </h5>
            <ul class="list-disc list-inside ml-4 text-gray-800">
              <li>
                Developed a reusable Jenkins shared library for CI/CD across
                multiple FPGA programs.
              </li>
              <li>
                Automated stages for linting, simulation, synthesis, and
                artifact publishing to JFrog.
              </li>
              <li>
                Improved pipeline reliability and onboarding speed for new
                engineers.
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div id="education" class="block">
        <h3 class="text-2xl font-semibold mb-4">Education</h3>

        <article class="mb-8">
          <h4 class="text-xl font-semibold">
            University of Florida – B.S. in Computer Engineering
          </h4>
          <p class="text-gray-600 italic">
            Gainesville, FL &middot; Aug 2015 – Dec 2020
          </p>

          <div class="mt-4">
            <h5 class="text-lg font-semibold">
              Foundational Years (2015–2017)
            </h5>
            <ul class="list-disc list-inside ml-4 text-gray-800">
              <li>
                Completed core coursework in digital logic, computer
                architecture, data structures, and systems programming.
              </li>
              <li>
                Explored early interest in embedded systems and hardware design
                through lab-based learning.
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <h5 class="text-lg font-semibold">Technical Focus (2017–2020)</h5>
            <ul class="list-disc list-inside ml-4 text-gray-800">
              <li>
                Specialized in FPGA design, signal processing, embedded systems,
                and low-level software development.
              </li>
              <li>
                Built a MIPS CPU for a final project using VHDL on the Basys3
                platform.
              </li>
              <li>
                Completed internships and coursework aligned with aerospace,
                defense, and digital hardware.
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div id="certifications" class="block">
        <h3 class="text-2xl font-semibold mb-4">Certifications</h3>
        <ul class="list-disc list-inside text-gray-800 mb-8">
          <li>AWS Certified Solutions Architect – Associate (In Progress)</li>
          <li>CompTIA Security+ (2023)</li>
        </ul>
      </div>

      <div id="skills" class="block">
        <h3 class="text-2xl font-semibold mb-4">Skills & Tools</h3>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800"
        >
          <div>
            <h4 class="font-semibold">HDL & Design</h4>
            <ul class="list-disc list-inside">
              <li>VHDL, Verilog, SystemVerilog</li>
              <li>Vivado, Quartus, IP Integrator</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold">Simulation & Verification</h4>
            <ul class="list-disc list-inside">
              <li>QuestaSim, Questa Lint, Ascent Lint</li>
              <li>UVM, JasperGold, vManager</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold">DevOps & CI/CD</h4>
            <ul class="list-disc list-inside">
              <li>Jenkins, Groovy, JFrog Artifactory</li>
              <li>Git, SVN, Jira, Confluence</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold">Scripting</h4>
            <ul class="list-disc list-inside">
              <li>Python, Tcl, Bash</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold">Compliance & Traceability</h4>
            <ul class="list-disc list-inside">
              <li>DO-254, IBM DOORs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.block {
  @apply mt-20  scroll-mt-40;
}
</style>
