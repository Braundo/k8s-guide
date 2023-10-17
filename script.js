// Function to toggle section expansion
function toggleSection(header) {
  const section = header.parentElement;
  const list = section.querySelector("ul");
  const isExpanded = list.style.display === "block";
  list.style.display = isExpanded ? "none" : "block";
  if (isExpanded) {
    header.querySelector(".material-icons").textContent = "chevron_right";
  } else {
    header.querySelector(".material-icons").textContent = "expand_more";
  }
}

// Function to toggle dark/light mode
function toggleMode() {
  const body = document.body;
  const modeToggleBtn = document.getElementById("mode-toggle");
  const isDarkMode = body.classList.toggle("light-mode");
  modeToggleBtn.innerHTML = isDarkMode
    ? '<span class="material-icons">nightlight</span>'
    : '<span class="material-icons">brightness_7</span>';
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to load sidebar from sidebar.html
function loadSidebar() {
  const pathPrefix = location.pathname.includes("/docs/") ? "../../" : ""; // Check if in a subdirectory
  fetch(`${pathPrefix}sidebar.html`)
    .then((response) => response.text())
    .then((data) => {
      const sidebar = document.getElementById("sidebar");
      const mobileMenu = document.getElementById("mobile-menu");
      sidebar.innerHTML = data;
      mobileMenu.innerHTML = data; // Populate mobile menu with the same content
    });
}

// Function to toggle sidebar and mobile menu
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  if (window.innerWidth <= 768) {
    // Check if in mobile view
    mobileMenu.classList.toggle("open");
    if (hamburgerMenu.classList.contains("x")) {
      hamburgerMenu.classList.remove("x");
      hamburgerMenu.innerHTML = "☰"; // Set content to hamburger icon
    } else {
      hamburgerMenu.classList.add("x");
      hamburgerMenu.innerHTML = "✕"; // Set content to X icon
    }
  } else {
    sidebar.classList.toggle("open");
  }
}

// Event listener to toggle sidebar on hamburger menu click (mobile view)
const hamburgerMenu = document.getElementById("hamburger-menu");
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", toggleSidebar);
}

// Load sidebar on page load
window.onload = loadSidebar;

let lastScrollTop = 0;

// Function to show or hide the scroll button
function toggleScrollButton(scrollingUp) {
  const scrollTopBtn = document.getElementById("scroll-top");
  if (scrollingUp) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
}

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const st = window.pageYOffset || document.documentElement.scrollTop;
  // Determine if scrolling up or down
  const scrollingUp = st < lastScrollTop;
  // Update the last scroll position
  lastScrollTop = st <= 0 ? 0 : st;
  // Toggle the scroll button based on scroll direction
  toggleScrollButton(scrollingUp);
});

// Assume urls is an array of URLs defined in the order they should be navigated
let urls = [
  "/docs/architecture/nodes.html",
  "/docs/architecture/node-communication.html",
  "/docs/architecture/controllers.html",
  "/docs/architecture/leases.html",
  "/docs/architecture/cloud-controller-manager.html",
  "/docs/architecture/cgroup-v2.html",
  "/docs/architecture/container-runtime-interface.html",
  "/docs/architecture/garbage-collection.html",
  "/docs/architecture/mixed-version-proxy.html",
  "/docs/containers/containers-overview.html",
  "/docs/containers/images.html",
  "/docs/containers/container-environment.html",
  "/docs/containers/runtime-class.html",
  "/docs/containers/container-lifecycle-hooks.html",
  "/docs/pods/pod-overview.html",
  "/docs/pods/pod-lifecycle.html",
  "/docs/pods/init-containers.html",
  "/docs/pods/disruptions.html",
  "/docs/pods/ephemeral-containers.html",
  "/docs/pods/qos-classes.html",
  "/docs/pods/user-namespaces.html",
  "/docs/pods/downward-api.html",
  "/docs/workloads/workload-resources.html",
  "/docs/workloads/deployments.html",
  "/docs/workloads/replicaset.html",
  "/docs/workloads/daemonsets.html",
  "/docs/workloads/jobs.html",
  "/docs/workloads/replicationcontroller.html",
  "/docs/services-lb-networking/network-overview.html",
  "/docs/services-lb-networking/service.html",
  "/docs/services-lb-networking/ingress.html",
  "/docs/services-lb-networking/endpoint-slices.html",
  "/docs/services-lb-networking/network-policies.html",
  "/docs/services-lb-networking/dns.html",
  "/docs/services-lb-networking/ipv4-ipv6.html",
  "/docs/services-lb-networking/topology-aware-routing.html",
  "/docs/services-lb-networking/service-networking.html",
  "/docs/storage/volumes.html",
  "/docs/storage/persistent-volumes.html",
  "/docs/storage/projected-volumes.html",
  "/docs/storage/ephemeral-volumes.html",
  "/docs/storage/storage-classes.html",
  "/docs/storage/dynamic-volume-provisioning.html",
  "/docs/storage/volume-snapshots.html",
  "/docs/storage/volume-snapshot-classes.html",
  "/docs/storage/csi-volume-cloning.html",
  "/docs/storage/storage-capacity.html",
  "/docs/storage/node-specific-volume-limits.html",
  "/docs/storage/volume-health-monitoring.html",
  "/docs/configuration/configuration-best-practices.html",
  "/docs/configuration/configmaps.html",
  "/docs/configuration/secrets.html",
  "/docs/configuration/resource-management.html",
  "/docs/configuration/organizing-cluster-access.html",
  "/docs/security/overview-of-cloud-native-security.html",
  "/docs/security/pod-security-standards.html",
  "/docs/security/service-accounts.html",
  "/docs/security/pod-security-admission.html",
  "/docs/security/controlling-access-to-kubernetes-api.html",
  "/docs/security/rbac-good-practices.html",
  "/docs/security/kubernetes-secrets-good-practices.html",
  "/docs/security/multi-tenancy.html",
  "/docs/security/hardening-guide-auth-mechanisms.html",
  "/docs/security/kubernetes-api-server-bypass-risks.html",
  "/docs/security/security-checklist.html",
  "/docs/policies/limit-ranges.html",
  "/docs/policies/resource-quotas.html",
  "/docs/policies/process-id-limits-and-reservations.html",
  "/docs/policies/node-resource-managers.html",
  "/docs/scheduling-preemption-eviction/kubernetes-scheduler.html",
  "/docs/scheduling-preemption-eviction/assigning-pods-to-nodes.html",
  "/docs/scheduling-preemption-eviction/pod-overhead.html",
  "/docs/scheduling-preemption-eviction/pod-scheduling-readiness.html",
  "/docs/scheduling-preemption-eviction/pod-topology-spread-constraints.html",
  "/docs/scheduling-preemption-eviction/taints-and-tolerations.html",
  "/docs/scheduling-preemption-eviction/scheduling-framework.html",
  "/docs/scheduling-preemption-eviction/dynamic-resource-allocation.html",
  "/docs/scheduling-preemption-eviction/scheduler-performance-tuning.html",
  "/docs/scheduling-preemption-eviction/resource-bin-packing.html",
  "/docs/scheduling-preemption-eviction/pod-priority-and-preemption.html",
  "/docs/scheduling-preemption-eviction/node-pressure-eviction.html",
  "/docs/scheduling-preemption-eviction/api-initiated-eviction.html",
  "/docs/cluster-administration/certificates.html",
  "/docs/cluster-administration/managing-resources.html",
  "/docs/cluster-administration/cluster-networking.html",
  "/docs/cluster-administration/logging-architecture.html",
  "/docs/cluster-administration/metrics-for-k8s-system-components.html",
  "/docs/cluster-administration/system-logs.html",
  "/docs/cluster-administration/traces-for-k8s-system-components.html",
  "/docs/cluster-administration/proxies-in-kubernetes.html",
  "/docs/cluster-administration/api-priority-fairness.html",
  "/docs/cluster-administration/installing-addons.html",
];

function navigateNext() {
  let currentIndex = urls.indexOf(window.location.pathname);
  if (currentIndex >= 0 && currentIndex < urls.length - 1) {
    let nextUrl = urls[currentIndex + 1];
    window.location.href = nextUrl;
  }
}

// Inside script.js
document.getElementById("randomizer").addEventListener("click", goToRandomPage);

function goToRandomPage() {
  if (urls && urls.length > 0) {
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
    window.location.href = randomUrl;
  } else {
    console.error("URLs array is empty or not defined.");
  }
}

/* turn backticks into code */
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.body.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (
      element.childNodes.length === 1 &&
      element.childNodes[0].nodeType === 3
    ) {
      // Text node
      var textContent = element.textContent;
      var htmlContent = textContent.replace(
        /`([^`]+)`/g,
        '<code class="language-shell">$1</code>'
      );
      if (htmlContent !== textContent) {
        element.innerHTML = htmlContent;
      }
    }
  }

  // Get all code elements
  var codeElements = document.querySelectorAll("code");

  // Apply styles
  for (var i = 0; i < codeElements.length; i++) {
    codeElements[i].style.color = "#ff6e86";
    codeElements[i].style.backgroundColor = "black";
    codeElements[i].style.fontWeight = "bold";
  }

  Prism.highlightAll();
});

new ClipboardJS(".copy-button");

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Copied!";
    button.style.color = "#ffffff"; // This will make the text color white
    setTimeout(() => {
      // This will revert the text back to the copy icon
      button.innerHTML = '<span class="material-icons">content_copy</span>';
      button.style.color = ""; // This will revert the text color back to its original value
    }, 2000);
  });
});
