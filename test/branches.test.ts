import { Branches, linkedinUrl } from '../lib/branches';

const allOfficers = Object.values(Branches).flatMap(
  (branch) => branch.officers
);

// Check for duplicate names
const nameCounts = new Map<string, number>();
for (const officer of allOfficers) {
  nameCounts.set(officer.name, (nameCounts.get(officer.name) || 0) + 1);
}

const duplicateNames = [...nameCounts.entries()]
  .filter(([, count]) => count > 1)
  .map(([name]) => name);

// Check for duplicate linkedin URLs (only for officers who have one)
const linkedinCounts = new Map<string, number>();
for (const officer of allOfficers) {
  if (officer.linkedin) {
    linkedinCounts.set(
      officer.linkedin,
      (linkedinCounts.get(officer.linkedin) || 0) + 1
    );
  }
}

const duplicateLinkedins = [...linkedinCounts.entries()]
  .filter(([, count]) => count > 1)
  .map(([linkedin]) => linkedin);

let passed = true;

if (duplicateNames.length > 0) {
  console.error('FAIL: Duplicate names found:', duplicateNames.join(', '));
  passed = false;
}

if (duplicateLinkedins.length > 0) {
  console.error(
    'FAIL: Duplicate linkedin URLs found:',
    duplicateLinkedins.join(', ')
  );
  passed = false;
}

if (passed) {
  console.log('PASS: No duplicate names or linkedin URLs found');
} else {
  process.exit(1);
}