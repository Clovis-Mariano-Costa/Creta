# IA READ FIRST — Creta

SCHEMA = JUS9_REPO_ENTRY_V1
STATE = DRAFT_BRANCH
PRIMARY_READER = IA
REPO_ROLE = INSTITUTIONAL_OR_SPIRITUAL_PROJECT
CLASSIFICATION = PUBLICO_SANITIZADO_UNLESS_OBJECT_SAYS_OTHERWISE
RULES = IA_FIRST + LINK_FIRST + EVIDENCE_FIRST + FAIL_CLOSED

## PURPOSE
Projeto/entidade relacionada; classificar conteúdo público, histórico e sensível.

## KNOWLEDGE FLOW
DISCOVER -> CLASSIFY -> STUDY_OR_EDIT -> EVIDENCE -> PUBLISH_OR_ROUTE -> KEEP_CANONICAL_POINTER

PUBLICATION_CONFIRMED != DRAFT
DRAFT != TRASH
COPY != CANON
LINK_FIRST = preferir a fonte canônica quando o objeto mora melhor em outro lugar.

## CHARLIE ECHO
IF_JUS9_LEARNED_X -> ECHO_MUST_HAVE_OPPORTUNITY_TO_LEARN_X.
VALID_PUBLICATION_IN_LIBRARY_OR_VADEMECUM -> ECHO_MUST_BE_NOTIFIED.
LEARNING_CONFIRMED -> testes técnicos + validação humana orientada via API, por ora.
HABILITADA_A_ENSINAR_NO_ESCOPO -> Echo pode ensinar com fonte, estado, limites e classificação.

## PUBLICATION EVENT
Preferir metadados:
CANONICAL_URI + VERSION + STATE + AUTHORITY + CLASSIFICATION + SHORT_SUMMARY
em vez de copiar a obra inteira para múltiplos repositórios.

NOTIFY != AUTHORIZE_READ.
SECRETO -> notificação sanitizada; leitura exige autorização válida.

## SECURITY
Nao publicar credencial, segredo, dado pessoal desnecessário ou material protegido.
Se o material amadurecer e outro lar for melhor, mover/encaminhar por processo governado e manter ponteiro quando útil.

## LINKS
GITHUB_INVENTORY = https://docs.google.com/document/d/1MfktKZtfL9imoyZ9DWDmBe3-z2jE_2HkRcTXydPSrPI/edit
LEARNING_HUB = https://github.com/Clovis-Mariano-Costa/aulas-charlie-echo-jus9-tecnologia-juridica

## NEXT
Mapear owner, estado editorial/institucional, fonte canônica, classificação e possibilidade de notificação Echo.
