/**
 * Real Projects, AcceleratorX Workspace & Review With Confidence - Interactive Engine
 * 
 * Connected Multi-Step Flow:
 * - Step 01: REAL PROJECTS (Interactive Project Scope Creator, Category Presets, Checklist)
 * - Step 02: BUILD IN REAL TIME (AcceleratorX Workspace, 3-Column IDE, Copilot Card, Live Telemetry Wave)
 * - Step 03: REVIEW WITH CONFIDENCE (Review #0182, Line 19 Callout, Floating Reviewer Card, Status Pill Bar)
 */

(function () {
  'use strict';

  // =========================================================================
  // Step 01 Category Mock Data
  // =========================================================================
  const categoryData = {
    business: {
      problem: "Our logistics team needs a better way to manage truck operations, routes, and deliveries to reduce delays and improve efficiency.",
      industry: "Logistics",
      complexity: "High",
      complexityBars: 4,
      impact: "Operational efficiency",
      checklist: [
        "Manage fleet and driver operations",
        "Track real-time deliveries",
        "Optimize routes",
        "Provide a live dashboard"
      ]
    },
    fintech: {
      problem: "Cross-border payment settlements take up to 3 days and incur high currency exchange slippage for regional SME merchants.",
      industry: "FinTech",
      complexity: "High",
      complexityBars: 4,
      impact: "Instant settlement speed",
      checklist: [
        "Automate multi-currency liquidity pools",
        "Real-time fraud prevention engine",
        "Direct API integration with banking gateways",
        "Unified merchant transaction ledger"
      ]
    },
    healthcare: {
      problem: "Hospital patient intake delays cause long emergency room queues and misaligned specialist triage schedules.",
      industry: "Healthcare",
      complexity: "Medium",
      complexityBars: 3,
      impact: "40% faster triage time",
      checklist: [
        "Automated smart triage classification",
        "Real-time patient bed allocation",
        "HIPAA-compliant doctor notes sync",
        "Emergency telemetry monitoring"
      ]
    },
    education: {
      problem: "University students drop out of online skill bootcamps due to lack of hands-on code reviews and structured mentor feedback.",
      industry: "EdTech",
      complexity: "Medium",
      complexityBars: 3,
      impact: "85% student completion rate",
      checklist: [
        "Automated AI code review & hints",
        "Live cohort pair-programming rooms",
        "Milestone-based project defenses",
        "Real-time student progress tracking"
      ]
    },
    logistics: {
      problem: "Warehouse picking routes are unoptimized, resulting in order fulfillment bottlenecks during high-volume peak hours.",
      industry: "Supply Chain",
      complexity: "High",
      complexityBars: 4,
      impact: "60% quicker pick & pack",
      checklist: [
        "3D spatial warehouse path optimizer",
        "Barcode & RFID automated verification",
        "Dynamic inventory replenishment alerts",
        "Real-time dispatch load balancer"
      ]
    },
    ecommerce: {
      problem: "Shoppers abandon high-intent carts because custom shipping costs and import duties are not calculated transparently at checkout.",
      industry: "E-commerce",
      complexity: "Medium",
      complexityBars: 3,
      impact: "28% lift in checkout conversion",
      checklist: [
        "Real-time geo-located duty estimation",
        "One-click guest checkout gateway",
        "Dynamic shipping rate aggregation",
        "Automated abandoned cart recovery flow"
      ]
    },
    sustainability: {
      problem: "Enterprise supply chains lack granular tracking for Scope 3 carbon emissions across Tier 2 and Tier 3 manufacturing partners.",
      industry: "CleanTech",
      complexity: "High",
      complexityBars: 4,
      impact: "Audit-ready ESG reporting",
      checklist: [
        "Automated vendor energy usage scraping",
        "ISO 14064 carbon offset calculations",
        "Emissions anomaly detection",
        "Auditor dashboard export"
      ]
    },
    other: {
      problem: "Describe your custom business problem here to configure tailored architecture, complexity targets, and delivery milestones.",
      industry: "Custom Domain",
      complexity: "Custom",
      complexityBars: 2,
      impact: "Tailored business ROI",
      checklist: [
        "End-to-end cloud architecture design",
        "Production CI/CD deployment pipeline",
        "Full test coverage & security audit",
        "Executive presentation deck"
      ]
    }
  };

  // Code snippets for Step 02 editor tabs
  const codeSnippets = {
    'App.tsx': [
      '<span class="syn-kw">const</span> <span class="syn-var">trucks</span> = <span class="syn-kw">await</span> <span class="syn-fn">fetch</span>(',
      '  <span class="syn-str">\'/api/trucks\'</span>',
      ').<span class="syn-fn">then</span>(<span class="syn-param">res</span> =&gt; <span class="syn-param">res</span>.<span class="syn-fn">json</span>());',
      '',
      '<span class="syn-fn">setData</span>(<span class="syn-var">trucks</span>);',
      '',
      '<span class="syn-comment">// Update dashboard</span>',
      '<span class="syn-obj">console</span>.<span class="syn-fn">log</span>(<span class="syn-str">"Data loaded"</span>);'
    ],
    'routes.ts': [
      '<span class="syn-kw">import</span> { <span class="syn-var">Router</span> } <span class="syn-kw">from</span> <span class="syn-str">\'express\'</span>;',
      '<span class="syn-kw">const</span> <span class="syn-var">router</span> = <span class="syn-fn">Router</span>();',
      '',
      '<span class="syn-var">router</span>.<span class="syn-fn">get</span>(<span class="syn-str">\'/api/trucks\'</span>, <span class="syn-kw">async</span> (<span class="syn-param">req</span>, <span class="syn-param">res</span>) =&gt; {',
      '  <span class="syn-kw">const</span> <span class="syn-var">active</span> = <span class="syn-kw">await</span> <span class="syn-fn">getFleetStatus</span>();',
      '  <span class="syn-param">res</span>.<span class="syn-fn">json</span>({ <span class="syn-var">trucks</span>: <span class="syn-var">active</span>, <span class="syn-var">routes</span>: 42 });',
      '});',
      '<span class="syn-kw">export default</span> <span class="syn-var">router</span>;'
    ],
    'data.ts': [
      '<span class="syn-kw">export interface</span> <span class="syn-var">TruckRecord</span> {',
      '  <span class="syn-var">id</span>: <span class="syn-kw">string</span>;',
      '  <span class="syn-var">driver</span>: <span class="syn-kw">string</span>;',
      '  <span class="syn-var">status</span>: <span class="syn-str">\'in-transit\'</span> | <span class="syn-str">\'idle\'</span>;',
      '  <span class="syn-var">telemetry</span>: <span class="syn-kw">number</span>[];',
      '}',
      '',
      '<span class="syn-kw">export const</span> <span class="syn-var">totalFleet</span> = 128;'
    ]
  };

  // =========================================================================
  // DOM Elements
  // =========================================================================
  const catButtons = document.querySelectorAll('.cat-pill');
  const problemTextElem = document.getElementById('problemTextContent');
  const industryValElem = document.getElementById('industryVal');
  const complexityValElem = document.getElementById('complexityVal');
  const complexityBars = document.getElementById('complexitySignalBars');
  const impactValElem = document.getElementById('impactVal');
  const checklistListElem = document.getElementById('checklistItemsList');
  const stepCounterDisplay = document.getElementById('stepCounterDisplay');
  const tabletFrame = document.getElementById('tabletFrame');
  const workspaceFrame = document.getElementById('workspaceFrame');
  const reviewFrame = document.getElementById('reviewFrame');
  const stageWrapper = document.getElementById('stageWrapper');
  const btnCreateProject = document.getElementById('btnCreateProject');

  // Multi-step panes (Steps 1, 2, 3, 4, 5)
  const leftPaneStep1 = document.getElementById('leftPaneStep1');
  const leftPaneStep2 = document.getElementById('leftPaneStep2');
  const leftPaneStep3 = document.getElementById('leftPaneStep3');
  const leftPaneStep4 = document.getElementById('leftPaneStep4');
  const leftPaneStep5 = document.getElementById('leftPaneStep5');
  const stageViewStep1 = document.getElementById('stageViewStep1');
  const stageViewStep2 = document.getElementById('stageViewStep2');
  const stageViewStep3 = document.getElementById('stageViewStep3');
  const stageViewStep4 = document.getElementById('stageViewStep4');
  const stageViewStep5 = document.getElementById('stageViewStep5');
  const vivaFrame = document.getElementById('vivaFrame');
  const shipFrame = document.getElementById('shipFrame');

  // Stepper Elements
  const stepNode1 = document.getElementById('step-node-1');
  const stepNode2 = document.getElementById('step-node-2');
  const stepNode3 = document.getElementById('step-node-3');
  const stepNode4 = document.getElementById('step-node-4');
  const stepNode5 = document.getElementById('step-node-5');
  const connector12 = document.getElementById('connector-1-2');
  const connector23 = document.getElementById('connector-2-3');
  const connector34 = document.getElementById('connector-3-4');
  const connector45 = document.getElementById('connector-4-5');
  const stepperItems = document.querySelectorAll('.stepper-item');

  // Step 4 Viva Elements
  const vivaWaveformVisualizer = document.getElementById('vivaWaveformVisualizer');
  const vivaTimerDisplay = document.getElementById('vivaTimerDisplay');
  const btnVivaCam = document.getElementById('btnVivaCam');
  const btnVivaMic = document.getElementById('btnVivaMic');
  const btnVivaHangup = document.getElementById('btnVivaHangup');
  const vivaQuestionBubble = document.getElementById('vivaQuestionBubble');
  const vivaQuestionText = document.getElementById('vivaQuestionText');

  // Step 5 BuildRx Elements
  const btnDeployShipProject = document.getElementById('btnDeployShipProject');
  const shipLiveNotice = document.getElementById('shipLiveNotice');
  const readyStatusText = document.getElementById('readyStatusText');
  const shipNavItems = document.querySelectorAll('.ship-nav-item');
  const shipScopeCardLabel = document.querySelector('.scope-card-label');
  const shipScopeMetrics = document.querySelectorAll('.scope-metric-box');

  // Workflow breadcrumb
  const wfSteps = document.querySelectorAll('.wf-step');

  // Step 2 Code editor tabs & canvas
  const editorTabs = document.querySelectorAll('.editor-file-tab');
  const codeLinesBlock = document.querySelector('.code-lines-block');
  const fileTreeItems = document.querySelectorAll('.file-tree-scroll .tree-row');
  const btnRefreshPreview = document.getElementById('btnRefreshPreview');
  const previewWaveLine = document.getElementById('previewWaveLine');
  const previewWaveArea = document.getElementById('previewWaveArea');
  const workspaceStatusbar = document.querySelector('.workspace-statusbar');

  // Step 3 Fleet Management Review Interactive Elements
  const fleetNavBtns = document.querySelectorAll('.fleet-nav-btn');
  const fleetTimeDropdown = document.getElementById('fleetTimeDropdown');
  const fleetTimeLabel = document.getElementById('fleetTimeLabel');
  const reviewChecklistStack = document.getElementById('reviewChecklistStack');
  const mapPinCallout = document.getElementById('mapPinCallout');
  const truckTelemetryCard = document.getElementById('truckTelemetryCard');
  const mentorCommentCard = document.getElementById('mentorCommentCard');
  const peerCommentCard = document.getElementById('peerCommentCard');
  const fleetEvalPills = document.querySelectorAll('.eval-pill');

  // Current active step tracker (1, 2, 3, 4, or 5)
  let currentStep = 1;

  // =========================================================================
  // Step 01 Category Auto-Switch & Typewriter Loop Engine
  // =========================================================================
  const categoryKeys = [
    'business',
    'fintech',
    'healthcare',
    'education',
    'logistics',
    'ecommerce',
    'sustainability',
    'other'
  ];
  let currentCategoryIndex = 0;
  let isCategoryHovered = false;
  let problemLoopTimeout = null;
  let activeProblemText = categoryData.business.problem;
  let problemCharIndex = 0;

  function runProblemTypewriterLoop() {
    if (!problemTextElem) return;
    if (problemLoopTimeout) {
      clearTimeout(problemLoopTimeout);
      problemLoopTimeout = null;
    }

    // Only run if currently on Step 01
    if (currentStep !== 1) {
      return;
    }

    const fullText = activeProblemText;
    // Calibrated so each module fully types and switches within 4 seconds (~1.8s typing + ~2.2s read pause)
    const typeSpeed = Math.max(10, Math.floor(1800 / (fullText.length || 1)));
    const pauseFullSentence = 2200; // ~2.2s pause after typing -> exactly ~4 seconds total per module

    if (problemCharIndex < fullText.length) {
      problemCharIndex++;
      problemTextElem.textContent = fullText.slice(0, problemCharIndex);
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      problemTextElem.appendChild(cursor);
      problemLoopTimeout = setTimeout(runProblemTypewriterLoop, typeSpeed);
    } else {
      // Complete sentence reached
      problemTextElem.textContent = fullText;
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      problemTextElem.appendChild(cursor);

      // Advance to next module at the 4-second mark
      problemLoopTimeout = setTimeout(advanceToNextModule, pauseFullSentence);
    }
  }

  function advanceToNextModule() {
    if (currentStep !== 1) return;

    // If user is hovering over categories or problem box to read, defer auto-switch
    if (isCategoryHovered) {
      problemLoopTimeout = setTimeout(advanceToNextModule, 500);
      return;
    }

    // Advance to next module in sequence
    currentCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
    selectCategory(categoryKeys[currentCategoryIndex]);
  }

  function setProblemText(newText) {
    activeProblemText = newText;
    problemCharIndex = 0;
    if (problemLoopTimeout) {
      clearTimeout(problemLoopTimeout);
      problemLoopTimeout = null;
    }
    if (problemTextElem) {
      problemTextElem.textContent = '';
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      problemTextElem.appendChild(cursor);
    }
    runProblemTypewriterLoop();
  }

  function selectCategory(catKey) {
    const data = categoryData[catKey];
    if (!data) return;

    const keyIndex = categoryKeys.indexOf(catKey);
    if (keyIndex !== -1) {
      currentCategoryIndex = keyIndex;
    }

    // Toggle active class on categories
    catButtons.forEach(btn => {
      if (btn.getAttribute('data-cat') === catKey) {
        btn.classList.add('active');
        if (typeof btn.scrollIntoView === 'function') {
          btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Industry Pill
    if (industryValElem) industryValElem.textContent = data.industry;

    // Update Complexity Pill
    if (complexityValElem) complexityValElem.textContent = data.complexity;
    if (complexityBars) {
      const bars = complexityBars.querySelectorAll('.s-bar');
      bars.forEach((bar, idx) => {
        if (idx < data.complexityBars) {
          bar.classList.add('active-orange');
        } else {
          bar.classList.remove('active-orange');
        }
      });
    }

    // Update Impact Pill
    if (impactValElem) impactValElem.textContent = data.impact;

    // Update Checklist Items
    if (checklistListElem) {
      checklistListElem.innerHTML = '';
      data.checklist.forEach((itemText, idx) => {
        const li = document.createElement('li');
        li.className = 'check-row';
        li.style.animationDelay = `${idx * 25}ms`;
        li.innerHTML = `
          <span class="check-circle-icon">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="check-text">${itemText}</span>
        `;
        checklistListElem.appendChild(li);
      });
    }

    // Animate Problem text with typewriter loop
    setProblemText(data.problem);
  }

  // Category Switch Click Listeners (Step 01)
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const catKey = btn.getAttribute('data-cat');
      if (catKey) {
        selectCategory(catKey);
      }
    });
  });

  // Pause auto-switching when user hovers over the category list or the problem box
  const categoriesSidebarElem = document.querySelector('.categories-sidebar');
  const problemTextAreaElem = document.getElementById('problemTextArea');
  if (categoriesSidebarElem) {
    categoriesSidebarElem.addEventListener('mouseenter', () => { isCategoryHovered = true; });
    categoriesSidebarElem.addEventListener('mouseleave', () => { isCategoryHovered = false; });
  }
  if (problemTextAreaElem) {
    problemTextAreaElem.addEventListener('mouseenter', () => { isCategoryHovered = true; });
    problemTextAreaElem.addEventListener('mouseleave', () => { isCategoryHovered = false; });
  }

  // Generic one-shot typewriter helper (used for Viva questions and prompts)
  let typewriterTimeout = null;
  function typeText(targetElem, text, callback) {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    targetElem.innerHTML = '';
    
    let index = 0;
    const speed = 14; // ms per char

    function step() {
      if (index < text.length) {
        targetElem.textContent = text.slice(0, index + 1);
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        targetElem.appendChild(cursor);
        index++;
        typewriterTimeout = setTimeout(step, speed);
      } else {
        targetElem.textContent = text;
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        targetElem.appendChild(cursor);
        if (callback) callback();
      }
    }
    step();
  }

  // =========================================================================
  // Master Step Navigation Engine: Steps 01, 02, 03, 04, and 05
  // =========================================================================
  function setNodeCompleted(stepNode) {
    if (!stepNode) return;
    stepNode.classList.remove('active');
    stepNode.classList.add('completed');
    const ring = stepNode.querySelector('.node-ring');
    const dot = stepNode.querySelector('.node-dot');
    const checkIcon = stepNode.querySelector('.node-check-icon');
    const codeIcon = stepNode.querySelector('.node-code-icon');
    const numIcon = stepNode.querySelector('.node-num-icon');
    const infinityIcon = stepNode.querySelector('.node-infinity-icon');
    const rocketIcon = stepNode.querySelector('.node-rocket-icon');
    const halo = stepNode.querySelector('.node-glow-halo');

    if (ring) {
      ring.classList.remove('idle-ring');
      ring.classList.add('completed-ring');
    }
    if (dot) dot.style.display = 'none';
    if (codeIcon) codeIcon.style.display = 'none';
    if (numIcon) numIcon.style.display = 'none';
    if (infinityIcon) infinityIcon.style.display = 'none';
    if (rocketIcon) rocketIcon.style.display = 'none';
    if (checkIcon) checkIcon.style.display = 'flex';
    if (halo) halo.remove();
  }

  function goToStep(targetStep) {
    currentStep = targetStep;

    // Hide all left panes and stage views first
    [leftPaneStep1, leftPaneStep2, leftPaneStep3, leftPaneStep4, leftPaneStep5].forEach(p => p && p.classList.remove('active'));
    [stageViewStep1, stageViewStep2, stageViewStep3, stageViewStep4, stageViewStep5].forEach(v => v && v.classList.remove('active'));

    // Reset Stepper nodes & connectors to base idle states
    stepperItems.forEach(item => {
      item.classList.remove('active');
      item.classList.remove('completed');
      const ring = item.querySelector('.node-ring');
      const dot = item.querySelector('.node-dot');
      const checkIcon = item.querySelector('.node-check-icon');
      const codeIcon = item.querySelector('.node-code-icon');
      const numIcon = item.querySelector('.node-num-icon');
      const infinityIcon = item.querySelector('.node-infinity-icon');
      const rocketIcon = item.querySelector('.node-rocket-icon');
      const halo = item.querySelector('.node-glow-halo');

      if (ring) {
        ring.classList.remove('completed-ring');
        ring.classList.add('idle-ring');
      }
      if (dot) {
        dot.classList.add('idle-dot');
        dot.style.display = 'block';
      }
      if (checkIcon) checkIcon.style.display = 'none';
      if (codeIcon) codeIcon.style.display = 'none';
      if (numIcon) numIcon.style.display = 'none';
      if (infinityIcon) infinityIcon.style.display = 'none';
      if (rocketIcon) rocketIcon.style.display = 'none';
      if (halo) halo.remove();
    });

    [connector12, connector23, connector34, connector45].forEach(c => {
      if (c) {
        c.classList.remove('completed-connector');
        c.classList.remove('transition-connector');
        c.classList.remove('active-connector');
      }
    });

    const stepNodes = [stepNode1, stepNode2, stepNode3, stepNode4, stepNode5];
    const connectors = [connector12, connector23, connector34, connector45];

    // Automatically mark all steps prior to targetStep as COMPLETED (turns green with done checkmark icon)
    for (let i = 1; i < targetStep; i++) {
      setNodeCompleted(stepNodes[i - 1]);
    }

    // Connectors configuration
    connectors.forEach((conn, idx) => {
      if (!conn) return;
      const connStepTo = idx + 2;
      const connStepFrom = idx + 1;
      if (connStepTo < targetStep) {
        // Between two completed steps -> full green glowing conduit
        conn.classList.add('completed-connector');
      } else if (connStepTo === targetStep) {
        // Between previous completed step and active step -> smooth green-to-cyan conduit
        conn.classList.add('transition-connector');
      } else if (connStepFrom === targetStep) {
        // Leading from active step to next idle step
        conn.classList.add('active-connector');
      }
    });

    // Stop Step 01 typewriter loop when navigating away from Step 01
    if (targetStep !== 1) {
      if (problemLoopTimeout) {
        clearTimeout(problemLoopTimeout);
        problemLoopTimeout = null;
      }
    }

    // Stop Step 02 auto-switch loop when navigating away from Step 02
    if (targetStep !== 2) {
      if (step2SwitchTimeout) {
        clearTimeout(step2SwitchTimeout);
        step2SwitchTimeout = null;
      }
    }

    // -----------------------------------------------------------------------
    // STEP 01: REAL PROJECTS
    // -----------------------------------------------------------------------
    if (targetStep === 1) {
      if (leftPaneStep1) leftPaneStep1.classList.add('active');
      if (stageViewStep1) stageViewStep1.classList.add('active');
      if (stepCounterDisplay) stepCounterDisplay.textContent = '01 / 05';

      // Start or resume module auto-switch loop for current active category
      selectCategory(categoryKeys[currentCategoryIndex] || 'business');

      if (stepNode1) {
        stepNode1.classList.add('active');
        const ring1 = stepNode1.querySelector('.node-ring');
        const dot1 = stepNode1.querySelector('.node-dot');
        if (ring1) ring1.classList.remove('idle-ring');
        if (dot1) dot1.classList.remove('idle-dot');
        if (!stepNode1.querySelector('.node-glow-halo')) {
          const halo = document.createElement('div');
          halo.className = 'node-glow-halo';
          stepNode1.querySelector('.stepper-node-wrap').appendChild(halo);
        }
      }

      // Bottom breadcrumb
      wfSteps.forEach(ws => ws.classList.remove('active-wf'));
      const learnWf = Array.from(wfSteps).find(s => s.textContent.trim() === 'LEARN');
      if (learnWf) learnWf.classList.add('active-wf');

    // -----------------------------------------------------------------------
    // STEP 02: BUILD IN REAL TIME
    // -----------------------------------------------------------------------
    } else if (targetStep === 2) {
      if (leftPaneStep2) leftPaneStep2.classList.add('active');
      if (stageViewStep2) stageViewStep2.classList.add('active');
      if (stepCounterDisplay) stepCounterDisplay.textContent = '02 / 05';

      // Start Step 2 module auto-switch loop (3 seconds duration)
      selectStep2Module(step2Modules[currentStep2Index] || 'App.tsx');

      // Node 02 active with <> code icon
      if (stepNode2) {
        stepNode2.classList.add('active');
        const ring2 = stepNode2.querySelector('.node-ring');
        const dot2 = stepNode2.querySelector('.node-dot');
        const codeIcon = stepNode2.querySelector('.node-code-icon');
        if (ring2) ring2.classList.remove('idle-ring');
        if (dot2) dot2.style.display = 'none';
        if (codeIcon) codeIcon.style.display = 'block';

        if (!stepNode2.querySelector('.node-glow-halo')) {
          const halo = document.createElement('div');
          halo.className = 'node-glow-halo';
          stepNode2.querySelector('.stepper-node-wrap').appendChild(halo);
        }
      }

      // Bottom breadcrumb
      wfSteps.forEach(ws => ws.classList.remove('active-wf'));
      const buildWf = Array.from(wfSteps).find(s => s.textContent.trim() === 'BUILD');
      if (buildWf) buildWf.classList.add('active-wf');

    // -----------------------------------------------------------------------
    // STEP 03: REVIEW WITH CONFIDENCE
    // -----------------------------------------------------------------------
    } else if (targetStep === 3) {
      if (leftPaneStep3) leftPaneStep3.classList.add('active');
      if (stageViewStep3) stageViewStep3.classList.add('active');
      if (stepCounterDisplay) stepCounterDisplay.textContent = '03 / 05';

      // Node 03: Active with glowing ring and halo
      if (stepNode3) {
        stepNode3.classList.add('active');
        const ring3 = stepNode3.querySelector('.node-ring');
        const dot3 = stepNode3.querySelector('.node-dot');
        if (ring3) ring3.classList.remove('idle-ring');
        if (dot3) dot3.classList.remove('idle-dot');

        if (!stepNode3.querySelector('.node-glow-halo')) {
          const halo = document.createElement('div');
          halo.className = 'node-glow-halo';
          stepNode3.querySelector('.stepper-node-wrap').appendChild(halo);
        }
      }

      // Bottom breadcrumb
      wfSteps.forEach(ws => ws.classList.remove('active-wf'));
      const reviewWf = Array.from(wfSteps).find(s => s.textContent.trim() === 'REVIEW');
      if (reviewWf) reviewWf.classList.add('active-wf');

    // -----------------------------------------------------------------------
    // STEP 04: DEFEND YOUR WORK ("ACCELERATORX VIVA")
    // -----------------------------------------------------------------------
    } else if (targetStep === 4) {
      if (leftPaneStep4) leftPaneStep4.classList.add('active');
      if (stageViewStep4) stageViewStep4.classList.add('active');
      if (stepCounterDisplay) stepCounterDisplay.textContent = '04 / 05';

      // Node 04: Active with infinity icon ♾ and glowing halo
      if (stepNode4) {
        stepNode4.classList.add('active');
        const ring4 = stepNode4.querySelector('.node-ring');
        const dot4 = stepNode4.querySelector('.node-dot');
        const infinityIcon = stepNode4.querySelector('.node-infinity-icon');
        if (ring4) ring4.classList.remove('idle-ring');
        if (dot4) dot4.style.display = 'none';
        if (infinityIcon) infinityIcon.style.display = 'flex';

        if (!stepNode4.querySelector('.node-glow-halo')) {
          const halo = document.createElement('div');
          halo.className = 'node-glow-halo';
          stepNode4.querySelector('.stepper-node-wrap').appendChild(halo);
        }
      }

      // Bottom breadcrumb
      wfSteps.forEach(ws => ws.classList.remove('active-wf'));
      const defendWf = Array.from(wfSteps).find(s => s.textContent.trim() === 'DEFEND');
      if (defendWf) defendWf.classList.add('active-wf');

    // -----------------------------------------------------------------------
    // STEP 05: SHIP REAL IMPACT ("BUILDRX")
    // -----------------------------------------------------------------------
    } else if (targetStep === 5) {
      if (leftPaneStep5) leftPaneStep5.classList.add('active');
      if (stageViewStep5) stageViewStep5.classList.add('active');
      if (stepCounterDisplay) stepCounterDisplay.textContent = '05 / 05';

      // Node 05: Active with rocket icon 🚀 and glowing halo
      if (stepNode5) {
        stepNode5.classList.add('active');
        const ring5 = stepNode5.querySelector('.node-ring');
        const dot5 = stepNode5.querySelector('.node-dot');
        const rocketIcon = stepNode5.querySelector('.node-rocket-icon');
        if (ring5) ring5.classList.remove('idle-ring');
        if (dot5) dot5.style.display = 'none';
        if (rocketIcon) rocketIcon.style.display = 'flex';

        if (!stepNode5.querySelector('.node-glow-halo')) {
          const halo = document.createElement('div');
          halo.className = 'node-glow-halo';
          stepNode5.querySelector('.stepper-node-wrap').appendChild(halo);
        }
      }

      // Bottom breadcrumb
      wfSteps.forEach(ws => ws.classList.remove('active-wf'));
      const shipWf = Array.from(wfSteps).find(s => s.textContent.trim() === 'SHIP');
      if (shipWf) shipWf.classList.add('active-wf');
    }
  }

  // Stepper Node Click Listeners
  if (stepNode1) stepNode1.addEventListener('click', () => goToStep(1));
  if (stepNode2) stepNode2.addEventListener('click', () => goToStep(2));
  if (stepNode3) stepNode3.addEventListener('click', () => goToStep(3));
  if (stepNode4) stepNode4.addEventListener('click', () => goToStep(4));
  if (stepNode5) stepNode5.addEventListener('click', () => goToStep(5));

  // Bottom workflow breadcrumbs click
  wfSteps.forEach(ws => {
    ws.addEventListener('click', () => {
      const text = ws.textContent.trim();
      if (text === 'LEARN') goToStep(1);
      if (text === 'BUILD') goToStep(2);
      if (text === 'REVIEW') goToStep(3);
      if (text === 'DEFEND') goToStep(4);
      if (text === 'SHIP') goToStep(5);
    });
  });

  // =========================================================================
  // Step 01 CTA Button "Create Project" -> Connects to Step 02 BUILD
  // =========================================================================
  if (btnCreateProject) {
    btnCreateProject.addEventListener('click', () => {
      const btnSpan = btnCreateProject.querySelector('span');
      const originalText = btnSpan.textContent;

      btnSpan.textContent = 'Launching Workspace...';
      btnCreateProject.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
      btnCreateProject.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.85)';

      setTimeout(() => {
        btnSpan.textContent = 'Connected to 02 BUILD';
        goToStep(2);

        setTimeout(() => {
          btnSpan.textContent = originalText;
          btnCreateProject.style.background = '';
          btnCreateProject.style.boxShadow = '';
        }, 1500);
      }, 500);
    });
  }

  // =========================================================================
  // Step 02 Module Auto-Switch Engine (App.tsx -> routes.ts -> data.ts)
  // =========================================================================
  const step2Modules = ['App.tsx', 'routes.ts', 'data.ts'];
  let currentStep2Index = 0;
  let step2SwitchTimeout = null;
  let isStep2Hovered = false;

  function selectStep2Module(fileName) {
    const fileIndex = step2Modules.indexOf(fileName);
    if (fileIndex !== -1) {
      currentStep2Index = fileIndex;
    }

    // 1. Update file tree selection (only the 3 modules under src)
    const subGroupFiles = document.querySelectorAll('.tree-sub-group .tree-row.file-item');
    subGroupFiles.forEach(row => {
      const nameElem = row.querySelector('.tree-item-name');
      if (nameElem && nameElem.textContent.trim() === fileName) {
        row.classList.add('selected-file');
      } else {
        row.classList.remove('selected-file');
      }
    });

    // 2. Update editor tabs
    editorTabs.forEach(tab => {
      const tabTitle = tab.querySelector('.tab-title-text');
      if (tabTitle && tabTitle.textContent.trim() === fileName) {
        tab.classList.add('active-editor-tab');
      } else {
        tab.classList.remove('active-editor-tab');
      }
    });

    // 3. Update code lines viewport
    const lines = codeSnippets[fileName];
    if (lines && codeLinesBlock) {
      codeLinesBlock.innerHTML = '';
      lines.forEach((lineStr, idx) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = idx === 1 ? 'code-line indent-code' : 'code-line';
        if (lineStr === '') lineDiv.className = 'code-line empty-line';
        lineDiv.innerHTML = lineStr || '&nbsp;';
        codeLinesBlock.appendChild(lineDiv);
      });
    }

    // Schedule next auto-switch in 3 seconds if on Step 2
    scheduleStep2NextModule();
  }

  function scheduleStep2NextModule() {
    if (step2SwitchTimeout) {
      clearTimeout(step2SwitchTimeout);
      step2SwitchTimeout = null;
    }

    if (currentStep !== 2) return;

    step2SwitchTimeout = setTimeout(() => {
      if (currentStep !== 2) return;
      if (isStep2Hovered) {
        scheduleStep2NextModule();
        return;
      }
      currentStep2Index = (currentStep2Index + 1) % step2Modules.length;
      selectStep2Module(step2Modules[currentStep2Index]);
    }, 3000); // exactly 3 seconds duration
  }

  // Click listeners ONLY on the 3 module items under src
  const step2ModuleElements = document.querySelectorAll('.tree-sub-group .tree-row.file-item');
  step2ModuleElements.forEach(row => {
    row.addEventListener('click', () => {
      const nameElem = row.querySelector('.tree-item-name');
      if (nameElem) {
        const fName = nameElem.textContent.trim();
        selectStep2Module(fName);
      }
    });
  });

  // Pause auto-switching when user hovers over files panel or code editor
  const filesPanelElem = document.querySelector('.panel-files');
  const codeEditorPanelElem = document.querySelector('.panel-code-editor');
  if (filesPanelElem) {
    filesPanelElem.addEventListener('mouseenter', () => { isStep2Hovered = true; });
    filesPanelElem.addEventListener('mouseleave', () => { isStep2Hovered = false; });
  }
  if (codeEditorPanelElem) {
    codeEditorPanelElem.addEventListener('mouseenter', () => { isStep2Hovered = true; });
    codeEditorPanelElem.addEventListener('mouseleave', () => { isStep2Hovered = false; });
  }

  // Background wave animation in Live Preview
  let waveTime = 0;
  function animateWave() {
    if (previewWaveLine && previewWaveArea && currentStep === 2) {
      waveTime += 0.045;
      
      const p1Y = (38 + Math.sin(waveTime) * 6).toFixed(1);
      const p2Y = (26 + Math.cos(waveTime * 1.2) * 8).toFixed(1);
      const p3Y = (34 + Math.sin(waveTime * 0.9) * 7).toFixed(1);
      const p4Y = (18 + Math.cos(waveTime * 1.1) * 6).toFixed(1);
      const p5Y = (12 + Math.sin(waveTime * 1.3) * 4).toFixed(1);

      const pathLine = `M 0,${p1Y} Q 25,${p2Y} 50,${p3Y} T 100,${p4Y} T 135,${p5Y} T 170,10`;
      const pathArea = `${pathLine} L 170,60 L 0,60 Z`;

      previewWaveLine.setAttribute('d', pathLine);
      previewWaveArea.setAttribute('d', pathArea);
    }
    requestAnimationFrame(animateWave);
  }
  requestAnimationFrame(animateWave);

  // =========================================================================
  // Step 03 Fleet Management Review Interactive Handlers
  // =========================================================================
  // Fleet Sidebar Nav Switching
  if (fleetNavBtns && fleetNavBtns.length > 0) {
    fleetNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fleetNavBtns.forEach(b => b.classList.remove('active-nav'));
        btn.classList.add('active-nav');
      });
    });
  }

  // Time Range Dropdown Cycle
  if (fleetTimeDropdown && fleetTimeLabel) {
    const timeOptions = ['Last 7 days', 'Last 30 days', 'Today', 'Q3 Fleet View'];
    let timeIndex = 0;
    fleetTimeDropdown.addEventListener('click', () => {
      timeIndex = (timeIndex + 1) % timeOptions.length;
      fleetTimeLabel.textContent = timeOptions[timeIndex];
      fleetTimeDropdown.style.transform = 'scale(0.96)';
      setTimeout(() => {
        fleetTimeDropdown.style.transform = '';
      }, 150);
    });
  }

  // Interactive Checklist Toggles
  if (reviewChecklistStack) {
    const checkRows = reviewChecklistStack.querySelectorAll('.checklist-row');
    checkRows.forEach(row => {
      row.addEventListener('click', () => {
        const state = row.getAttribute('data-state');
        const iconSpan = row.querySelector('.check-status-icon');
        if (!iconSpan) return;

        if (state === 'pass') {
          row.setAttribute('data-state', 'warn');
          row.className = 'checklist-row warn-row';
          iconSpan.className = 'check-status-icon warn-icon';
          iconSpan.innerHTML = '!';
        } else if (state === 'warn') {
          row.setAttribute('data-state', 'idle');
          row.className = 'checklist-row idle-row';
          iconSpan.className = 'check-status-icon idle-icon';
          iconSpan.innerHTML = '';
        } else {
          row.setAttribute('data-state', 'pass');
          row.className = 'checklist-row pass-row';
          iconSpan.className = 'check-status-icon pass-icon';
          iconSpan.innerHTML = `
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `;
        }
      });
    });
  }

  // Evaluation Badges Click Interaction
  if (fleetEvalPills && fleetEvalPills.length > 0) {
    fleetEvalPills.forEach(pill => {
      pill.addEventListener('click', () => {
        pill.style.transform = 'scale(1.06) translateY(-2px)';
        pill.style.boxShadow = '0 0 16px rgba(56, 189, 248, 0.5)';
        setTimeout(() => {
          pill.style.transform = '';
          pill.style.boxShadow = '';
        }, 400);
      });
    });
  }

  // Pin / Truck Telemetry Highlight
  if (mapPinCallout && truckTelemetryCard) {
    mapPinCallout.addEventListener('click', () => {
      truckTelemetryCard.style.transform = 'scale(1.08) translateY(-4px)';
      truckTelemetryCard.style.borderColor = '#00f0ff';
      truckTelemetryCard.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.8)';
      setTimeout(() => {
        truckTelemetryCard.style.transform = '';
        truckTelemetryCard.style.borderColor = '';
        truckTelemetryCard.style.boxShadow = '';
      }, 1200);
    });
  }

  // =========================================================================
  // Step 04: "ACCELERATORX VIVA" Live Audio Waveform, Timer & Interactive Controls
  // =========================================================================
  let audioVisualizerActive = true;
  let audioTimerInterval = null;
  let audioSeconds = 42; // starts at 00:42 matching image

  function initWaveform() {
    if (!vivaWaveformVisualizer) return;
    vivaWaveformVisualizer.innerHTML = '';
    const barCount = 34;
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'viva-wave-bar';
      vivaWaveformVisualizer.appendChild(bar);
    }
  }

  function startWaveformAnimation() {
    initWaveform();
    const bars = vivaWaveformVisualizer ? vivaWaveformVisualizer.querySelectorAll('.viva-wave-bar') : [];
    let phase = 0;

    function animate() {
      if (currentStep === 4 && bars.length > 0) {
        phase += 0.08;
        bars.forEach((bar, idx) => {
          if (!audioVisualizerActive) {
            bar.style.height = '4px';
            return;
          }
          // Organic voice frequency simulation with center weighting
          const centerWeight = Math.sin((idx / bars.length) * Math.PI);
          const wave1 = Math.sin(phase * 2.2 + idx * 0.45);
          const wave2 = Math.cos(phase * 1.4 - idx * 0.28);
          const wave3 = Math.sin(phase * 0.75 + idx * 0.85);
          const rawHeight = (wave1 * 0.4 + wave2 * 0.35 + wave3 * 0.25 + 1) * 12 * centerWeight + 4;
          const clampedHeight = Math.max(3, Math.min(26, rawHeight));
          bar.style.height = `${clampedHeight.toFixed(1)}px`;
        });
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  function startAudioTimer() {
    if (audioTimerInterval) clearInterval(audioTimerInterval);
    audioTimerInterval = setInterval(() => {
      if (currentStep === 4 && audioVisualizerActive && vivaTimerDisplay) {
        audioSeconds++;
        const mins = Math.floor(audioSeconds / 60).toString().padStart(2, '0');
        const secs = (audioSeconds % 60).toString().padStart(2, '0');
        vivaTimerDisplay.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  // Interactive Viva Questions cycling
  const vivaQuestions = [
    "Why did you choose this architecture?",
    "How would this service scale under 100k concurrent requests?",
    "What trade-offs did you make with the database schema?",
    "How do you handle zero-downtime database migrations?"
  ];
  let vivaQuestionIndex = 0;

  if (vivaQuestionBubble) {
    vivaQuestionBubble.addEventListener('click', () => {
      vivaQuestionIndex = (vivaQuestionIndex + 1) % vivaQuestions.length;
      if (vivaQuestionText) {
        typeText(vivaQuestionText, vivaQuestions[vivaQuestionIndex]);
      }
    });
  }

  // Call Controls Toggles
  if (btnVivaMic) {
    btnVivaMic.addEventListener('click', () => {
      audioVisualizerActive = !audioVisualizerActive;
      btnVivaMic.classList.toggle('active-muted', !audioVisualizerActive);
    });
  }

  if (btnVivaCam) {
    btnVivaCam.addEventListener('click', () => {
      btnVivaCam.classList.toggle('active-muted');
      const learnerImg = document.querySelector('#learnerVideoCard .viva-webcam-img');
      if (learnerImg) {
        learnerImg.style.opacity = btnVivaCam.classList.contains('active-muted') ? '0.2' : '1';
      }
    });
  }

  if (btnVivaHangup) {
    btnVivaHangup.addEventListener('click', () => {
      btnVivaHangup.style.transform = 'scale(0.9)';
      setTimeout(() => {
        btnVivaHangup.style.transform = '';
        if (vivaQuestionText) {
          typeText(vivaQuestionText, "Viva defense session completed. Outstanding job defending your technical decisions!");
        }
      }, 200);
    });
  }

  // =========================================================================
  // Step 05: BUILDRX Interactive Sidebar Navigation & Deployment Simulation
  // =========================================================================
  const shipTabData = {
    dashboard: {
      label: 'DASHBOARD',
      m1Num: '128',
      m1Name: 'Trucks',
      m2Num: '42',
      m2Name: 'Routes'
    },
    fleet: {
      label: 'FLEET DISPATCH',
      m1Num: '128',
      m1Name: 'Active Fleet',
      m2Num: '98.4%',
      m2Name: 'On-Time'
    },
    routes: {
      label: 'ROUTE OPTIMIZER',
      m1Num: '42',
      m1Name: 'Active Paths',
      m2Num: '1,420',
      m2Name: 'km Saved'
    },
    analytics: {
      label: 'LIVE TELEMETRY',
      m1Num: '99.9%',
      m1Name: 'Uptime',
      m2Num: '12.4k',
      m2Name: 'Req / sec'
    },
    settings: {
      label: 'DEPLOY CONFIG',
      m1Num: 'AWS',
      m1Name: 'Production',
      m2Num: 'us-east-1',
      m2Name: 'Region'
    }
  };

  if (shipNavItems && shipNavItems.length > 0) {
    shipNavItems.forEach(item => {
      item.addEventListener('click', () => {
        shipNavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const tabKey = item.getAttribute('data-tab');
        const data = shipTabData[tabKey];
        if (data && shipScopeCardLabel && shipScopeMetrics.length >= 2) {
          shipScopeCardLabel.textContent = data.label;
          const m1 = shipScopeMetrics[0];
          const m2 = shipScopeMetrics[1];
          if (m1) {
            const numElem = m1.querySelector('.metric-number');
            const nameElem = m1.querySelector('.metric-name');
            if (numElem) numElem.textContent = data.m1Num;
            if (nameElem) nameElem.textContent = data.m1Name;
          }
          if (m2) {
            const numElem = m2.querySelector('.metric-number');
            const nameElem = m2.querySelector('.metric-name');
            if (numElem) numElem.textContent = data.m2Num;
            if (nameElem) nameElem.textContent = data.m2Name;
          }
        }
      });
    });
  }

  // Interactive Deployment CTA Button Simulation
  if (btnDeployShipProject) {
    let isDeployed = false;
    btnDeployShipProject.addEventListener('click', () => {
      if (isDeployed) {
        // Already deployed - reset or view live
        return;
      }
      const label = btnDeployShipProject.querySelector('.deploy-btn-label');
      const arrow = btnDeployShipProject.querySelector('.deploy-btn-arrow');
      const glyph = btnDeployShipProject.querySelector('.deploy-rocket-glyph');

      if (label) label.textContent = 'DEPLOYING...';
      if (arrow) arrow.style.display = 'none';
      btnDeployShipProject.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
      btnDeployShipProject.style.boxShadow = '0 0 38px rgba(16, 185, 129, 0.9)';
      btnDeployShipProject.style.pointerEvents = 'none';

      setTimeout(() => {
        isDeployed = true;
        if (label) label.textContent = 'DEPLOYED TO PRODUCTION';
        if (glyph) {
          glyph.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `;
        }
        btnDeployShipProject.style.pointerEvents = 'auto';

        if (readyStatusText) {
          readyStatusText.textContent = 'Live in Production';
          readyStatusText.style.color = '#34d399';
        }

        if (shipLiveNotice) {
          shipLiveNotice.style.display = 'flex';
        }
      }, 750);
    });
  }

  // =========================================================================
  // 3D Parallax Mouse Tracking across Active Frame (Tablet, Workspace, Review, Viva, Ship)
  // =========================================================================
  if (stageWrapper && window.innerWidth > 992) {
    let ticking = false;

    stageWrapper.addEventListener('mousemove', (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = stageWrapper.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          const normX = x / (rect.width / 2);
          const normY = y / (rect.height / 2);

          const rotY = -8 + normX * 6;
          const rotX = 6 - normY * 5;

          let targetFrame = null;
          if (currentStep === 1) targetFrame = tabletFrame;
          else if (currentStep === 2) targetFrame = workspaceFrame;
          else if (currentStep === 3) targetFrame = reviewFrame;
          else if (currentStep === 4) targetFrame = vivaFrame;
          else if (currentStep === 5) targetFrame = shipFrame;

          if (targetFrame) {
            targetFrame.style.transform = `rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) translateY(-2px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    stageWrapper.addEventListener('mouseleave', () => {
      if (tabletFrame) tabletFrame.style.transform = 'rotateY(-8deg) rotateX(6deg)';
      if (workspaceFrame) workspaceFrame.style.transform = 'rotateY(-8deg) rotateX(6deg)';
      if (reviewFrame) reviewFrame.style.transform = 'rotateY(-8deg) rotateX(6deg)';
      if (vivaFrame) vivaFrame.style.transform = 'rotateY(-8deg) rotateX(6deg)';
      if (shipFrame) shipFrame.style.transform = 'rotateY(-8deg) rotateX(6deg)';
    });
  }

  // =========================================================================
  // Initialize on Step 01: Real Projects Workflow
  // =========================================================================
  startWaveformAnimation();
  startAudioTimer();
  goToStep(1);

})();
