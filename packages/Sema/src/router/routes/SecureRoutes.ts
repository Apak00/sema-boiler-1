import RouteBase from '@router/routes/RouteBase';

// LEVEL 1
// ----------------------------------------------------------------
const Dashboard = new RouteBase({
  name: 'Dashboard',
});

export const Auftragsplanung = new RouteBase({
  name: 'Auftragsplanung',
});

export const Produktivstellung = new RouteBase({
  name: 'Produktivstellung',
});

export const Modulauswahl = new RouteBase({
  name: 'Modulauswahl',
});

export const Releaseplanung = new RouteBase({
  name: 'Releaseplanung',
});

export const Promotestufenablgeich = new RouteBase({
  name: 'Promotestufenablgeich',
});

// LEVEL 2
// ----------------------------------------------------------------

export const KalenderProduktivstellung = new RouteBase({
  name: 'Kalender Produktivstellung',
  parent: Produktivstellung,
});

export const third = new RouteBase({
  name: 'third',
  parent: KalenderProduktivstellung,
});

// SET CHILDREN
// ----------------------------------------------------------------
Produktivstellung.children = {
  KalenderProduktivstellung,
};

KalenderProduktivstellung.children = {
  third,
};

export default {
  Dashboard,
  Auftragsplanung,
  Produktivstellung,
  Modulauswahl,
  Releaseplanung,
  Promotestufenablgeich,
};
